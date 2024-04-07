"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryRecipientLockedFunds = exports.queryTimelockLockedFunds = void 0;
const client_1 = require("../client");
/**
 * Queries a timelock contract for locked funds given an owner/recipient tuple
 * @param contractAddress
 * @param owner
 * @param recipient
 * @returns
 */
async function queryTimelockLockedFunds(contractAddress, owner, recipient) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS({
        'ADO_timelock_address': contractAddress,
        'ADO_timelock_timelock_getLockedFunds_owner': owner,
        'ADO_timelock_timelock_getLockedFunds_recipient': recipient
    });
    return resp.ADO.timelock.getLockedFunds;
}
exports.queryTimelockLockedFunds = queryTimelockLockedFunds;
/**
 * Queries a timelock contract for all locked funds for a given recipient
 * @param contractAddress
 * @param recipient
 * @param options
 * @returns
 */
async function queryRecipientLockedFunds(contractAddress, recipient, options) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT({
        'ADO_timelock_address': contractAddress,
        'ADO_timelock_timelock_getLockedFundsForRecipient_recipient': recipient,
        'ADO_timelock_timelock_getLockedFundsForRecipient_options': options
    });
    return resp.ADO.timelock.getLockedFundsForRecipient;
}
exports.queryRecipientLockedFunds = queryRecipientLockedFunds;
