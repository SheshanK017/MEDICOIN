"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryCW20TokenInfo = void 0;
const client_1 = require("../client");
/**
 * Queries the token info for a given token contract
 * @param contractAddress
 * @returns
 */
async function queryCW20TokenInfo(contractAddress) {
    const resp = await client_1.querySdk.CW20_TOKEN_INFO({
        contractAddress
    });
    return resp.ADO.cw20.tokenInfo;
}
exports.queryCW20TokenInfo = queryCW20TokenInfo;
