"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPrimitiveValue = exports.queryPrimitive = void 0;
const client_1 = require("../client");
/**
 * Queries details about a primitive given its contract address
 * @param contractAddress The contract address of the primitive
 * @returns
 */
async function queryPrimitive(contractAddress) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR({
        'ADO_primitive_address': contractAddress
    });
    return resp.ADO.primitive.andr.owner;
}
exports.queryPrimitive = queryPrimitive;
/**
 * Queries the value of a given key from a given primitie contract
 * @param contractAddress The contract address of the primitive
 * @param key The key to query
 * @returns
 */
async function queryPrimitiveValue(contractAddress, key) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE({
        'ADO_primitive_address': contractAddress,
        ADO_primitive_primitive_getValue_key: key
    });
    return resp.ADO.primitive.getValue;
}
exports.queryPrimitiveValue = queryPrimitiveValue;
