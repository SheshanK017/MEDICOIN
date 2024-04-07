"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryStrategyAddress = exports.queryBalance = void 0;
const client_1 = require("../client");
async function queryBalance(contractAddress, address) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_VAULT_BALANCE({
        'ADO_vault_address': contractAddress,
        'ADO_vault_vault_balance_address': address
    });
    return resp.ADO.vault.balance;
}
exports.queryBalance = queryBalance;
async function queryStrategyAddress(contractAddress, strategy) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS({
        'ADO_vault_address': contractAddress,
        'ADO_vault_vault_strategyAddress_strategy': strategy
    });
    return resp.ADO.vault.strategyAddress;
}
exports.queryStrategyAddress = queryStrategyAddress;
