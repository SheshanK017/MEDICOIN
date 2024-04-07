"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryTransferAgreement = exports.queryTokens = exports.queryOwnerOf = exports.queryNFTInfo = exports.queryIsArchived = exports.queryContractInfo = exports.queryApprovals = exports.queryApproval = exports.queryAllTokens = exports.queryAllOperators = exports.queryAllNFTInfo = void 0;
const client_1 = require("../client");
/**
 * Queries a CW721 contract for all info for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
async function queryAllNFTInfo(contractAddress, tokenId, includeExpired = false) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_allNftInfo_tokenId': tokenId,
        'ADO_cw721_cw721_allNftInfo_includeExpired': includeExpired
    });
    return resp.ADO.cw721.allNftInfo;
}
exports.queryAllNFTInfo = queryAllNFTInfo;
/**
 * Queries a CW721 contract for all approved operators for a given token owner
 * @param contractAddress
 * @param owner
 * @param includeExpired
 * @param options
 * @returns
 */
async function queryAllOperators(contractAddress, owner, includeExpired = false, options) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_allOperators_owner': owner,
        'ADO_cw721_cw721_allOperators_includeExpired': includeExpired,
        'ADO_cw721_cw721_allOperators_options': options
    });
    return resp.ADO.cw721.allOperators;
}
exports.queryAllOperators = queryAllOperators;
/**
 * Queries a CW721 contract for all tokens
 * @param contractAddress
 * @param options
 * @returns
 */
async function queryAllTokens(contractAddress, options) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_ALLTOKENS({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_allTokens_options': options
    });
    return resp.ADO.cw721.allTokens;
}
exports.queryAllTokens = queryAllTokens;
/**
 * Queries a CW721 contract for whether a given address is an assigned operator for a given token
 * @param contractAddress
 * @param spender
 * @param tokenId
 * @param includeExpired
 * @returns
 */
async function queryApproval(contractAddress, spender, tokenId, includeExpired = false) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_APPROVAL({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_approval_spender': spender,
        'ADO_cw721_cw721_approval_tokenId': tokenId,
        'ADO_cw721_cw721_approval_includeExpired': includeExpired
    });
    return resp.ADO.cw721.approval;
}
exports.queryApproval = queryApproval;
/**
 * Queries a CW721 contract for all approvals for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
async function queryApprovals(contractAddress, tokenId, includeExpired = false) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_APPROVALS({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_approvals_tokenId': tokenId,
        'ADO_cw721_cw721_approvals_includeExpired': includeExpired
    });
    return resp.ADO.cw721.approvals;
}
exports.queryApprovals = queryApprovals;
/**
 * Queries a CW721 contract for its contract info
 * @param contractAddress
 * @returns
 */
async function queryContractInfo(contractAddress) {
    const resp = await client_1.querySdk.CW721_INFO({
        contractAddress
    });
    return resp.ADO.cw721.contractInfo;
}
exports.queryContractInfo = queryContractInfo;
/**
 * Queries a CW721 contract whether a given token ID is archived
 * @param contractAddress
 * @param tokenId
 * @returns
 */
async function queryIsArchived(contractAddress, tokenId) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_ISARCHIVED({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_isArchived_tokenId': tokenId
    });
    return resp.ADO.cw721.isArchived;
}
exports.queryIsArchived = queryIsArchived;
/**
 * Queries a CW721 contract for a given token IDs NFT info
 * @param contractAddress
 * @param tokenId
 * @returns
 */
async function queryNFTInfo(contractAddress, tokenId) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_NFTINFO({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_nftInfo_tokenId': tokenId
    });
    return resp.ADO.cw721.nftInfo;
}
exports.queryNFTInfo = queryNFTInfo;
/**
 * Queries a CW721 contract for the owner of a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
async function queryOwnerOf(contractAddress, tokenId, includeExpired = false) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_OWNEROF({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_ownerOf_tokenId': tokenId,
        'ADO_cw721_cw721_ownerOf_includeExpired': includeExpired
    });
    return resp.ADO.cw721.ownerOf.owner;
}
exports.queryOwnerOf = queryOwnerOf;
/**
 * Queries a CW721 contract for all tokens owned by a given address
 * @param contractAddress
 * @param owner
 * @param options
 * @returns
 */
async function queryTokens(contractAddress, owner, options) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_TOKENS({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_tokens_owner': owner,
        'ADO_cw721_cw721_tokens_options': options
    });
    return resp.ADO.cw721.tokens;
}
exports.queryTokens = queryTokens;
/**
 * Queries a CW721 contract for the transfer agreement for a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
async function queryTransferAgreement(contractAddress, tokenId) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT({
        'ADO_cw721_address': contractAddress,
        'ADO_cw721_cw721_transferAgreement_tokenId': tokenId
    });
    return resp.ADO.cw721.transferAgreement;
}
exports.queryTransferAgreement = queryTransferAgreement;
