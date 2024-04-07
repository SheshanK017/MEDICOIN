"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTxExplorerURL = exports.validateAddress = exports.encode = void 0;
const bech32_1 = require("bech32");
/**
 * Encodes data into a base64 string
 * @param data
 * @returns
 */
function encode(data) {
    return Buffer.from(JSON.stringify(data)).toString("base64");
}
exports.encode = encode;
/**
 * Validates a given address. If an address prefix is provided it will also be validated.
 * @param addr
 * @param addressPrefix
 * @returns
 */
function validateAddress(addr, addressPrefix) {
    try {
        const resp = bech32_1.bech32.decode(addr);
        return !addressPrefix || resp.prefix === addressPrefix;
    }
    catch (error) {
        throw error;
    }
}
exports.validateAddress = validateAddress;
/**
 * Gets a TX URL from a given hash and explorer URL
 * @param hash
 * @param url
 * @returns
 */
function getTxExplorerURL(hash, url) {
    if (!url.includes("${txHash}"))
        throw new Error("Provided URL does not include '${txHash}'");
    return url.replace("${txHash}", hash);
}
exports.getTxExplorerURL = getTxExplorerURL;
