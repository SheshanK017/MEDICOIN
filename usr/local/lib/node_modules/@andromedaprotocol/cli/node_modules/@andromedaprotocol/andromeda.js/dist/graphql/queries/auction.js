"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAuctionLatestState = exports.queryBids = exports.queryAuctionState = exports.queryAuctionInfo = exports.queryAuctionIds = void 0;
const client_1 = require("../client");
/**
 * Queries all token IDs from an auction contract for a given token ID/token contract address tuple
 * @param contractAddress
 * @param tokenId
 * @param tokenAddress
 * @returns
 */
async function queryAuctionIds(contractAddress, tokenId, tokenAddress) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS({
        'ADO_auction_address': contractAddress,
        'ADO_auction_auction_auctionIDs_tokenAddress': tokenAddress,
        'ADO_auction_auction_auctionIDs_tokenId': tokenId
    });
    return resp.ADO.auction.auctionIDs.auction_ids;
}
exports.queryAuctionIds = queryAuctionIds;
/**
 * Queries auction information from an auction contract about a particular token contract by address
 * @param contractAddress
 * @param tokenAddress
 * @returns
 */
async function queryAuctionInfo(contractAddress, tokenAddress) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS({
        'ADO_auction_address': contractAddress,
        'ADO_auction_auction_auctionInfosForAddress_tokenAddress': tokenAddress
    });
    return resp.ADO.auction.auctionInfosForAddress;
}
exports.queryAuctionInfo = queryAuctionInfo;
/**
 * Queries auction state from an auction contract given an auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
async function queryAuctionState(contractAddress, auctionId) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE({
        'ADO_auction_address': contractAddress,
        'ADO_auction_auction_auctionState_auctionId': auctionId
    });
    return resp.ADO.auction.auctionState;
}
exports.queryAuctionState = queryAuctionState;
/**
 * Queries all bids from an auction contract for a given auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
async function queryBids(contractAddress, auctionId, filters) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_AUCTION_BIDS({
        'ADO_auction_address': contractAddress,
        'ADO_auction_auction_bids_auctionId': auctionId,
        'ADO_auction_auction_bids_options': filters
    });
    return resp.ADO.auction.bids.bids;
}
exports.queryBids = queryBids;
/**
 * Queries an auction contract for the latest auction state for a given token address/id tuple
 * @param contractAddress
 * @param tokenAddress
 * @param tokenId
 * @returns
 */
async function queryAuctionLatestState(contractAddress, tokenAddress, tokenId) {
    const resp = await client_1.querySdk.CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE({
        'ADO_auction_address': contractAddress,
        'ADO_auction_auction_latestAuctionState_tokenAddress': tokenAddress,
        'ADO_auction_auction_latestAuctionState_tokenId': tokenId
    });
    return resp.ADO.auction.latestAuctionState;
}
exports.queryAuctionLatestState = queryAuctionLatestState;
