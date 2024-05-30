// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;

import { Test } from "forge-std/src/Test.sol";
import { console2 } from "forge-std/src/console2.sol";

import "../src/SunkCostCharity.sol";
import { MockERC20 } from "./MockERC20.sol";

contract SunkCostCharityTest is Test {
    SunkCostCharity internal scc;
    MockERC20 internal bdge;

    uint8 constant bdgeDecimals = 8;
    uint128 constant singleUnit = uint128(10 ** bdgeDecimals);

    address private charity = address(1);
    address private user1 = address(2);
    address private user2 = address(3);
    address private user3 = address(4);
    address private user4 = address(5);

    /// @dev A function invoked before each test case is run.
    function setUp() public virtual {
        bdge = new MockERC20();
        scc = new SunkCostCharity(bdge);

        bdge.mint(address(this), 1000 * singleUnit);
        bdge.mint(user1, 100 * singleUnit);
        bdge.mint(user2, 100 * singleUnit);
        bdge.mint(user3, 100 * singleUnit);

        bdge.approve(address(scc), type(uint128).max);
        vm.prank(user1);
        bdge.approve(address(scc), type(uint128).max);
        vm.prank(user2);
        bdge.approve(address(scc), type(uint128).max);
        vm.prank(user3);
        bdge.approve(address(scc), type(uint128).max);
    }

    function test_Round_Create_EnsureInitialValuesInRange() external {
        vm.expectRevert(ERROR_INVALID_AMOUNT);
        scc.createRound("", 10 ** 5, 24 hours, 30 minutes, 48 hours, 100_000, address(0), "");
        vm.expectRevert(ERROR_INVALID_AMOUNT);
        scc.createRound("", type(uint128).max, 24 hours, 30 minutes, 48 hours, 100_000, address(0), "");
        vm.expectRevert(ERROR_INVALID_TIME);
        scc.createRound("", singleUnit, 1 hours, 30 minutes, 48 hours, 100_000, address(0), "");
        vm.expectRevert(ERROR_EMPTY_STRING);
        scc.createRound("", singleUnit, 24 hours, 30 minutes, 48 hours, 100_000, address(0), "");
    }

    function test_Round_Create_RoundProperties() external {
        // initial price, initial timer, timer extension, maximum timer, price extension
        scc.createRound("Genesis Pot", singleUnit, 24 hours, 30 minutes, 48 hours, 100_000, address(0), "");

        (
            bytes32 name,
            uint64 endTime,
            uint128 initialKeyPrice,
            uint128 priceIncrement,
            uint32 timerIncrement,
            uint32 maxTimerLength,
            uint64 keysBought,
            address lastBuyer,
            address charityWallet,
        ) = scc.rounds(1);
        assertEq(initialKeyPrice, 10 ** bdgeDecimals);
        assertEq(endTime, block.timestamp + 24 hours);
        assertEq(timerIncrement, 30 minutes);
        assertEq(maxTimerLength, 48 hours);
        assertEq(priceIncrement, 100_000);
        assertEq(keysBought, 0);
        assertEq(lastBuyer, address(this));
        assertEq(name, "Genesis Pot");
        assertEq(charityWallet, address(0));
    }

    function createRound() internal returns (uint256 roundId) {
        return createRound(singleUnit);
    }

    function createRound(uint128 _initialAmount) internal returns (uint256 roundId) {
        roundId = scc.createRound("Test Contract", _initialAmount, 24 hours, 30 minutes, 48 hours, 100_000, charity, "");
    }

    function test_Round_Create_Effects() external {
        uint256 initialContractBalance = bdge.balanceOf(address(scc));
        uint256 initialUserBalance = bdge.balanceOf(user1);
        assertEq(initialContractBalance, 0);
        createRound();
        uint256 finalContractBalance = bdge.balanceOf(address(scc));
        uint256 finalUserBalance = bdge.balanceOf(user1);
        assertEq(finalContractBalance, initialContractBalance + singleUnit);
        assertEq(finalUserBalance, initialUserBalance);
    }

    function test_Round_BuyKey_Basic() external {
        uint256 roundId = createRound();

        vm.prank(user1);
        scc.buyRoundKey(roundId);

        (,, uint128 initialKeyPrice, uint128 priceIncrement,,,, address lastBuyer,,) = scc.rounds(roundId);
        assertEq(lastBuyer, user1);

        uint128 currentPrice = scc.getRoundCurrentPrice(roundId);
        assertEq(initialKeyPrice + priceIncrement * 2, currentPrice);
    }

    function test_Round_BuyKey_Checks() external {
        vm.expectRevert(ERROR_INVALID_ID);
        vm.prank(user1);
        scc.buyRoundKey(1);

        uint256 roundId = createRound();

        // The underlying ERC20 contract, if implemented rightly,
        // will reject the transaction to transfer the tokens since the user has no tokens.
        vm.expectRevert();
        vm.prank(user4);
        scc.buyRoundKey(roundId);

        uint256 initialContractBalance = bdge.balanceOf(address(scc));
        uint256 initialUserBalance = bdge.balanceOf(user1);
        vm.prank(user1);
        scc.buyRoundKey(roundId);
        uint256 finalContractBalance = bdge.balanceOf(address(scc));
        uint256 finalUserBalance = bdge.balanceOf(user1);

        assertEq(finalContractBalance, initialContractBalance + singleUnit + 100_000);
        assertEq(finalUserBalance, initialUserBalance - (singleUnit + 100_000));
    }

    function test_Round_BuyKey_TimerChecks() external {
        uint256 roundId = createRound();
        bdge.approve(address(scc), type(uint128).max);
        scc.buyRoundKey(roundId);

        // After initial time has passed, the round should still be active based on the timer extension.
        skip(1 days);
        vm.prank(user2);
        scc.buyRoundKey(roundId);

        bdge.mint(user2, 100_000 * singleUnit);
        for (uint256 i = 0; i < 100; i++) {
            vm.prank(user2);
            scc.buyRoundKey(roundId);
        }

        (, uint64 endTime,,,, uint32 maxTimerLength,,,,) = scc.rounds(roundId);
        assertEq(endTime, block.timestamp + maxTimerLength);

        skip(3 days);
        vm.expectRevert(ERROR_ROUND_ENDED);
        vm.prank(user2);
        scc.buyRoundKey(roundId);
    }

    function test_Round_PreventClaimBeforeDistribution() external {
        uint256 roundId = createRound();

        vm.startPrank(user1);
        scc.buyRoundKey(roundId);

        vm.expectRevert(ERROR_FUNDS_NOT_DISTRIBUTED);
        scc.claimFunds(roundId);

        (, uint64 endTime,,,,,,,,) = scc.rounds(roundId);

        // End the game
        vm.warp(endTime + 1);

        scc.distributeFunds(roundId);
        // Now shouldn't revert
        scc.claimFunds(roundId);
    }

    function test_Round_DistributeRewards() external {
        uint256 roundId = createRound();

        address[3] memory users = [user1, user2, user3];
        uint256 roundSize = singleUnit;
        uint256 currentPrice = roundSize;
        uint256[] memory userShares = new uint256[](3);

        for (uint256 i = 0; i < 6; i++) {
            vm.pauseGasMetering();
            currentPrice += 100_000;
            roundSize += currentPrice;
            userShares[i % 3] += currentPrice;
            vm.resumeGasMetering();
            vm.prank(users[i % 3]);
            scc.buyRoundKey(roundId);
        }

        // Premature distribution should fail
        vm.expectRevert();
        scc.distributeFunds(roundId);

        (, uint64 endTime,,,,,,,,) = scc.rounds(roundId);
        vm.warp(endTime + 1);

        (,,,,,,, address lastBuyer,,) = scc.rounds(roundId);
        assertEq(lastBuyer, user3, "Last buyer incorrect");

        uint256 initialCharityBalance = bdge.balanceOf(charity);
        uint256 initialUserBalance = bdge.balanceOf(user3);

        scc.distributeFunds(roundId);

        uint256 finalCharityBalance = bdge.balanceOf(charity);
        uint256 finalUserBalance = bdge.balanceOf(user3);

        assertEq(scc.roundPoolSize(roundId), roundSize, "Round pool size");

        assertEq(finalCharityBalance, initialCharityBalance + roundSize / 5, "charity amount check"); // charity is 20%
        assertEq(initialUserBalance, finalUserBalance, "user funds distributed early"); // no funds should move to users
            // until they claim

        // trying to distibute again should fail
        vm.expectRevert(ERROR_FUNDS_DISTRIBUTED);
        scc.distributeFunds(roundId);

        // user3 claims their funds
        vm.prank(user3);
        scc.claimFunds(roundId);

        finalUserBalance = bdge.balanceOf(user3);
        assertEq(finalUserBalance, initialUserBalance + roundSize * 2 / 5, "winner allocation incorrect"); // winner
            // gets 40%

        // trying to claim again should do nothing but not revert
        vm.prank(user3);
        scc.claimFunds(roundId);

        finalUserBalance = bdge.balanceOf(user3);
        assertEq(finalUserBalance, initialUserBalance + roundSize * 2 / 5, "over-allocation of funds");

        uint256 initialUser1Balance = bdge.balanceOf(user1);

        vm.prank(user1);
        scc.claimFunds(roundId);

        uint256 finalUser1Balance = bdge.balanceOf(user1);

        uint256 totalShares = roundSize - userShares[2];
        // Each user asides the winner gets 40% of the round pool split back to them based on their input to the pool
        assertEq(
            finalUser1Balance,
            initialUser1Balance + (userShares[0] * roundSize * 2 / 5 / totalShares),
            "incorrect redistribution of user funds"
        );
    }
}
