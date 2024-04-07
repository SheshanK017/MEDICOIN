"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMetaUtilsFactory = void 0;
const networks_1 = require("@injectivelabs/networks");
const TokenMetaUtils_1 = require("./TokenMetaUtils");
const network_1 = require("./tokens/network");
const tokens_1 = __importDefault(require("./tokens/tokens"));
class TokenMetaUtilsFactory {
    static make(network = networks_1.Network.Mainnet) {
        if ((0, networks_1.isTestnet)(network)) {
            return new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForTestnet)());
        }
        if (network === networks_1.Network.Devnet) {
            return new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForDevnet)());
        }
        if (network === networks_1.Network.Devnet1) {
            return new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForDevnet1)());
        }
        if (network === networks_1.Network.Devnet2) {
            return new TokenMetaUtils_1.TokenMetaUtils((0, network_1.getTokensBySymbolForDevnet2)());
        }
        return new TokenMetaUtils_1.TokenMetaUtils(tokens_1.default);
    }
}
exports.TokenMetaUtilsFactory = TokenMetaUtilsFactory;
//# sourceMappingURL=TokenMetaUtilsFactory.js.map