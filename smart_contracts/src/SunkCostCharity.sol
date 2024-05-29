// SPDX-License-Identifier: MIT
pragma solidity >=0.8.25;

import { Context } from "@openzeppelin/contracts/utils/Context.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

bytes constant ERROR_INVALID_AMOUNT = "INVALID AMOUNT";
bytes constant ERROR_INVALID_TIME = "INVALID TIME";
bytes constant ERROR_EMPTY_STRING = "EMPTY STRING";
bytes constant ERROR_INSUFFICIENT_BALANCE = "INSUFFICIENT BALANCE";
bytes constant ERROR_ROUND_ENDED = "ROUND ENDED";
bytes constant ERROR_INVALID_ID = "INVALID ID";
bytes constant ERROR_PREMATURE_DISTRIBUTION = "ERROR_PREMATURE_DISTRIBUTION";
bytes constant ERROR_FUNDS_DISTRIBUTED = "FUNDS DISTRIBUTED";
bytes constant ERROR_FUNDS_NOT_DISTRIBUTED = "FUNDS NOT DISTRIBUTED";

uint256 constant MINIMUM_KEY_PRICE = 10 ** 6;
uint256 constant MAXIMUM_INITIAL_KEY_PRICE = 100_000_000 * 10 ** 6;
uint256 constant MINIMUM_INITIAL_TIMER = 1 hours;

struct Round {
    bytes32 name;
    uint64 endTime;
    uint128 initialKeyPrice;
    uint128 priceIncrement;
    uint32 timerIncrement;
    uint32 maxTimerLength;
    uint64 keysBought;
    address lastBuyer;
    address charityWallet;
    bool distributed;
    uint256 totalShares;
    bytes promotionalImage;
}

contract SunkCostCharity is Context {
    event KeyPurchased(uint256 indexed roundId, address indexed buyer, uint256 price, uint256 timestamp);

    uint256 public roundCounter;
    IERC20 public immutable token;

    mapping(uint256 => Round) private _rounds;
    mapping(uint256 => mapping(address => uint256)) roundUserBalances;

    constructor(IERC20 _token) {
        token = _token;
    }

    modifier requireRoundOngoing(uint256 _roundId) {
        require(block.timestamp < _rounds[_roundId].endTime, string(ERROR_ROUND_ENDED));
        _;
    }

    modifier requireValidRound(uint256 _roundId) {
        require(_roundId <= roundCounter, string(ERROR_INVALID_ID));
        _;
    }

    function createRound(
        bytes32 _name,
        uint128 _initialPrice,
        uint256 _duration,
        uint256 _timerExtension,
        uint256 _maxTimerDuration,
        uint128 _priceExtension,
        address _charityWallet,
        bytes memory _promotionalImage
    )
        external
        returns (uint256 roundId)
    {
        require(
            _initialPrice < MAXIMUM_INITIAL_KEY_PRICE && _initialPrice >= MINIMUM_KEY_PRICE,
            string(ERROR_INVALID_AMOUNT)
        );
        require(_duration >= MINIMUM_INITIAL_TIMER, string(ERROR_INVALID_TIME));
        require(_name != bytes32(0), string(ERROR_EMPTY_STRING));

        token.transferFrom(_msgSender(), address(this), _initialPrice);

        roundId = ++roundCounter;
        _rounds[roundId] = Round({
            name: _name,
            endTime: uint64(block.timestamp + _duration),
            initialKeyPrice: _initialPrice,
            priceIncrement: _priceExtension,
            timerIncrement: uint32(_timerExtension),
            maxTimerLength: uint32(_maxTimerDuration),
            keysBought: 0,
            lastBuyer: _msgSender(),
            charityWallet: _charityWallet,
            distributed: false,
            totalShares: 0,
            promotionalImage: _promotionalImage
        });
        roundUserBalances[roundId][ _msgSender()] += _initialPrice;
    }

    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }

    function buyRoundKey(uint256 _roundId) external requireValidRound(_roundId) requireRoundOngoing(_roundId) {
        Round storage round = _rounds[_roundId];

        uint128 keyPrice = _calculateRoundKeyPrice(round);
        address sender = _msgSender();

        token.transferFrom(sender, address(this), keyPrice);

        emit KeyPurchased(_roundId, sender, keyPrice, block.timestamp);
        round.lastBuyer = sender;
        round.keysBought++;
        round.endTime = uint64(min(round.endTime + round.timerIncrement, block.timestamp + round.maxTimerLength));
        roundUserBalances[_roundId][sender] += keyPrice;
    }

    function distributeFunds(uint256 _roundId) external requireValidRound(_roundId) {
        // Checks
        Round storage round = _rounds[_roundId];
        require(block.timestamp >= round.endTime, string(ERROR_PREMATURE_DISTRIBUTION));
        require(!round.distributed, string(ERROR_FUNDS_DISTRIBUTED));

        // Effects
        round.distributed = true;

        // Interactions
        uint256 poolSize = _calculateRoundPoolSize(round);
        round.totalShares = poolSize - roundUserBalances[_roundId][round.lastBuyer];
        token.transfer(round.charityWallet, poolSize / 5);
    }

    function claimFunds(uint256 _roundId) external {
        claimFundsTo(_roundId, _msgSender());
    }

    function claimFundsTo(uint256 _roundId, address _to) public requireValidRound(_roundId) {
        Round storage round = _rounds[_roundId];
        require(round.distributed, string(ERROR_FUNDS_NOT_DISTRIBUTED));

        address sender = _msgSender();

        uint256 balance = roundUserBalances[_roundId][sender];
        if (sender == round.lastBuyer && balance != 0 && round.keysBought != 0) {
            balance = _calculateRoundPoolSize(round) * 2 / 5;
        } else {
            // 40% of total pool gets split to non-winners when round ends
            // according to their contribution to the pool
            balance = 2 * balance * _calculateRoundPoolSize(round) / 5 / round.totalShares;
        }
        roundUserBalances[_roundId][sender] = 0;

        token.transfer(_to, balance);
    }

    function roundPoolSize(uint256 _roundId) public view returns (uint256) {
        Round memory round = _rounds[_roundId];
        return _calculateRoundPoolSize(round);
    }

    function rounds(uint256 _roundId)
        external
        view
        returns (
            bytes32 name,
            uint64 endTime,
            uint128 initialKeyPrice,
            uint128 priceIncrement,
            uint32 timerIncrement,
            uint32 maxTimerLength,
            uint64 keysBought,
            address lastBuyer,
            address charityWallet,
            bytes memory promotionalImage
        )
    {
        Round storage round = _rounds[_roundId];
        name = round.name;
        endTime = round.endTime;
        initialKeyPrice = round.initialKeyPrice;
        priceIncrement = round.priceIncrement;
        timerIncrement = round.timerIncrement;
        maxTimerLength = round.maxTimerLength;
        keysBought = round.keysBought;
        lastBuyer = round.lastBuyer;
        charityWallet = round.charityWallet;
        promotionalImage = round.promotionalImage;
    }

    function _calculateRoundKeyPrice(Round memory round) internal pure returns (uint128) {
        return round.initialKeyPrice + (round.keysBought + 1) * round.priceIncrement;
    }

    function _calculateRoundPoolSize(Round memory round) internal pure returns (uint256) {
        if (round.keysBought == 0) return round.initialKeyPrice;
        // n = _keysBought + 1
        // a = _initialKeyPrice
        // d = _priceIncrement
        // Sum of A.P. = (n / 2) * [2a + (n - 1) * d]

        return (round.keysBought + 1) * (2 * round.initialKeyPrice + round.keysBought * round.priceIncrement) / 2;
    }

    function getRoundCurrentPrice(uint256 _roundId) public view returns (uint128) {
        Round memory round = _rounds[_roundId];

        return _calculateRoundKeyPrice(round);
    }
}
