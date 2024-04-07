"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryADOPackageDefinition = exports.queryADOTypes = void 0;
const client_1 = require("../client");
/**
 * Queries all valid ADO types
 * @returns
 */
async function queryADOTypes() {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADOP();
    return resp.ADOP.adoTypes;
}
exports.queryADOTypes = queryADOTypes;
/**
 * Queries the package definition for a given ADO type
 * @param adoType
 * @returns
 */
async function queryADOPackageDefinition(adoType) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADOP_PACKAGE({
        ADOP_package_adoType: adoType
    });
    return resp.ADOP.package;
}
exports.queryADOPackageDefinition = queryADOPackageDefinition;
