"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryTxByHash = exports.queryTxByHeight = exports.queryTxByContract = exports.queryTxByAccount = exports.getAttribute = exports.getAdoType = exports.cleanTx = exports.andrEventKeys = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const logs_1 = require("@cosmjs/stargate/build/logs");
const client_1 = require("../client");
exports.andrEventKeys = ["andr_app"];
function cleanTx(tx) {
    const rawLog = (0, logs_1.parseRawLog)(tx.rawLog);
    return {
        ...tx,
        rawLog,
        tx: (0, proto_signing_1.decodeTxRaw)(tx.tx),
        adoType: getAdoType(rawLog),
    };
}
exports.cleanTx = cleanTx;
function getAdoType(logs) {
    const attrs = getAttribute("wasm.type", logs);
    return attrs[0] ? attrs[0].value : undefined;
}
exports.getAdoType = getAdoType;
function getAttribute(field, logs) {
    const [type, key] = field.split(".");
    const attrs = [];
    if (!type || !key)
        return attrs;
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        if (!log)
            continue;
        const event = log.events.find((ev) => ev.type === type);
        if (!event)
            continue;
        const attr = event.attributes.find((attr) => attr.key === key);
        if (attr)
            attrs.push(attr);
    }
    return attrs;
}
exports.getAttribute = getAttribute;
/**
 * Queries all transactions for a given account
 * @param chainId
 * @param address
 * @param minHeight
 * @param maxHeight
 * @returns
 */
async function queryTxByAccount(chainId, address, minHeight, maxHeight) {
    const resp = await client_1.querySdk.TX_BY_ACCOUNT({
        chainId,
        sentFromOrTo: address,
        maxHeight,
        minHeight
    });
    return resp.tx.byAccount;
}
exports.queryTxByAccount = queryTxByAccount;
/**
 * Queries all transactions for a given contract address
 * @param chainId
 * @param contractAddress
 * @param minHeight
 * @param maxHeight
 * @returns
 */
async function queryTxByContract(chainId, contractAddress, minHeight, maxHeight) {
    const resp = await client_1.querySdk.TX_BY_CONTRACT({
        chainId,
        maxHeight,
        minHeight,
        contractAddress
    });
    return resp.tx.byContract;
}
exports.queryTxByContract = queryTxByContract;
/**
 * Queries all transactions for a given height
 * @param height
 * @returns
 */
async function queryTxByHeight(chainId, height) {
    const resp = await client_1.querySdk.TX_BY_HEIGHT({
        chainId,
        height
    });
    return resp.tx.byHeight;
}
exports.queryTxByHeight = queryTxByHeight;
/**
 * Queries a transaction by tx hash
 * @param chainId
 * @param hash
 * @returns
 */
async function queryTxByHash(chainId, hash) {
    const resp = await client_1.querySdk.TX_BY_HASH({
        chainId,
        hash
    });
    return resp.tx.byHash;
}
exports.queryTxByHash = queryTxByHash;
