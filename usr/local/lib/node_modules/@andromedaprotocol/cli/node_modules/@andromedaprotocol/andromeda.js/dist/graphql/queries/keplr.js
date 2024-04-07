"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryKeplrAllConfigs = exports.queryKeplrConfig = void 0;
const client_1 = require("../client");
/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
async function queryKeplrConfig(identifier) {
    const resp = await client_1.querySdk.KEPLR_CONFIG({
        identifier
    });
    return resp.keplrConfigs.config;
}
exports.queryKeplrConfig = queryKeplrConfig;
/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
async function QueryKeplrAllConfigs() {
    const resp = await client_1.querySdk.ALL_KEPLR_CONFIG();
    return resp.keplrConfigs.allConfigs;
}
exports.QueryKeplrAllConfigs = QueryKeplrAllConfigs;
