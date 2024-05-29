// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;

import "../src/SunkCostCharity.sol";
import "../test/MockERC20.sol";

import { BaseScript } from "./Base.s.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract TestDeploy is BaseScript {
    function run() public broadcast returns (SunkCostCharity scc, MockERC20 token) {
        address tokenAddr = vm.envAddress("SUNK_COST_TOKEN_ADDRESS");
        if (tokenAddr != address(0)) {
            token = MockERC20(tokenAddr);
        } else {
            token = new MockERC20();
            token.mint(broadcaster, 100_000_000 * 10 ** token.decimals());
        }
        scc = new SunkCostCharity(IERC20(address(token)));
    }
}
