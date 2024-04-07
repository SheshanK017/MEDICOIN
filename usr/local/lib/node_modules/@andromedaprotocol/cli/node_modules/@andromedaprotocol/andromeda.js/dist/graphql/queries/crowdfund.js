"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryCrowdfundState = exports.queryCrowdfundTokenAvailable = exports.queryCrowdfundConfig = exports.queryCrowdfundAvailableTokens = void 0;
const client_1 = require("../client");
/**
 * Queries all available token IDs from a crowdfund contract
 * @param contractAddress
 * @returns
 */
async function queryCrowdfundAvailableTokens(contractAddress) {
    const resp = await client_1.querySdk.CROWDFUND_AVAILABLE_TOKENS({
        contractAddress
    });
    return resp.ADO.crowdfund.availableTokens;
}
exports.queryCrowdfundAvailableTokens = queryCrowdfundAvailableTokens;
/**
 * Queries the config for a given crowdfund contract
 * @param contractAddress
 * @returns
 */
async function queryCrowdfundConfig(contractAddress) {
    const resp = await client_1.querySdk.CROWDFUND_CONFIG({
        contractAddress
    });
    return resp.ADO.crowdfund.config;
}
exports.queryCrowdfundConfig = queryCrowdfundConfig;
async function queryCrowdfundTokenAvailable(contractAddress, tokenId) {
    const resp = await client_1.querySdk.CROWDFUND_IS_TOKEN_AVAILABLE({
        contractAddress,
        tokenId
    });
    return resp.ADO.crowdfund.isTokenAvailable;
}
exports.queryCrowdfundTokenAvailable = queryCrowdfundTokenAvailable;
/**
 * Queries the current crowdfund state
 * @param contractAddress
 * @returns
 */
async function queryCrowdfundState(contractAddress) {
    const resp = await client_1.querySdk.CROWDFUND_STATE({
        contractAddress
    });
    return resp.ADO.crowdfund.state;
}
exports.queryCrowdfundState = queryCrowdfundState;
