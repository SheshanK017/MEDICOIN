"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPayments = void 0;
const client_1 = require("../client");
/**
 * Queries a rates contract for its stored rate info
 * @param contractAddress
 * @returns
 */
async function queryPayments(contractAddress) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_RATES_PAYMENTS({
        'ADO_rates_address': contractAddress
    });
    return resp.ADO.rates.payments;
}
exports.queryPayments = queryPayments;
