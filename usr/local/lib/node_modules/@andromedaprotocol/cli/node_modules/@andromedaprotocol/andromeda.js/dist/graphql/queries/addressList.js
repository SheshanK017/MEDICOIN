"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAddressListIncludesAddress = void 0;
const client_1 = require("../client");
/**
 * Queries an address list contract whether it includes a given address
 * @param contractAddress
 * @param address
 * @returns
 */
async function queryAddressListIncludesAddress(contractAddress, address) {
    const resp = await client_1.querySdk.ADDRESS_LIST_CONTAINS_ADDRESS({
        address,
        contractAddress
    });
    return resp.ADO.address_list.includesAddress.included;
}
exports.queryAddressListIncludesAddress = queryAddressListIncludesAddress;
