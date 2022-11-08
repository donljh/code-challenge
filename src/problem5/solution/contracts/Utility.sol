// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
    function balanceOf(address wallet) external view returns (uint256);
}

contract Utility {

    struct BalanceData {
        address token;
        uint256 balance;
    }

    function getBalances(address wallet, address[] memory tokens) public view returns(BalanceData[] memory) {
        BalanceData[] memory balances = new BalanceData[](tokens.length);
        uint arrayLength = tokens.length;
        for (uint i = 0; i < arrayLength; i++) {
            IERC20 token = IERC20(tokens[i]);
            uint256 balance = token.balanceOf(wallet);
            balances[i] = BalanceData(tokens[i], balance);
        }
        return balances;
    }   
}