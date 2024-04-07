"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedFieldPolicy = void 0;
__exportStar(require("./__generated/apollo-helpers"), exports);
__exportStar(require("./__generated/types"), exports);
/**
 * Typed Field Policy will be used with apollo client to provide information about key fields.
 * Keys fields are important from cache perspective and default key field (id) is missing from our results.
 * This field policy object is easy to create because of codegen policy type generated and also provides a
 * reusable object which can easily be integrated in different projects.
 */
exports.TypedFieldPolicy = {
    BaseAdo: {
        keyFields: ['address'],
    },
    AppAdo: {
        keyFields: ['address'],
    },
    Ado: {
        keyFields: ['address'],
    },
    AdoQuery: {
        merge: true
    },
    TxSearchResult: {
        merge: true
    },
    TxInfo: {
        keyFields: ['hash']
    },
    AssetResult: {
        keyFields: ['address', 'name']
    },
    AccountsQuery: {
        fields: {
            assets: {
                // Don't cache separate results based on
                // any of this field's arguments.
                keyArgs: ['walletAddress'],
                // Concatenate the incoming list items with
                // the existing list items.
                merge(existing, incoming, { args }) {
                    const offset = args?.offset ?? 0;
                    // Slicing is necessary because the existing data is
                    // immutable, and frozen in development.
                    const merged = existing ? existing.slice(0) : [];
                    for (let i = 0; i < incoming.length; ++i) {
                        merged[offset + i] = incoming[i];
                    }
                    return merged;
                },
            }
        }
    }
};
