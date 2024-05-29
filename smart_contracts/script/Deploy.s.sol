// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;

import "../src/SunkCostCharity.sol";

import { BaseScript } from "./Base.s.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract Deploy is BaseScript {
    function run() public broadcast returns (SunkCostCharity scc) {
        address tokenAddr = vm.envAddress("SUNK_COST_TOKEN_ADDRESS");
        if (tokenAddr == address(0)) {
            revert("SUNK_COST_TOKEN_ADDRESS not set");
        }
        scc = new SunkCostCharity(IERC20(tokenAddr));
    }
}
