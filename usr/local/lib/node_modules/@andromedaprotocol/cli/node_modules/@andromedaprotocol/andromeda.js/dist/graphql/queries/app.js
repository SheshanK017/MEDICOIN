"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryApp = void 0;
const client_1 = require("../client");
/**
 * Queries details about an App given its contract address
 * @param contractAddress The contract address of the app
 * @returns
 */
async function queryApp(contractAddress) {
    return (await client_1.querySdk.APP_CONFIG_AND_COMPONENTS({
        contractAddress
    })).ADO.app;
}
exports.queryApp = queryApp;
