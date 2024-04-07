"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryConfig = void 0;
const client_1 = require("../client");
/**
 * Queries a splitter contract for its config
 * @param contractAddress
 * @returns
 */
async function queryConfig(contractAddress) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_SPLITTER_CONFIG({
        'ADO_splitter_address': contractAddress
    });
    return resp.ADO.splitter.config;
}
exports.queryConfig = queryConfig;
