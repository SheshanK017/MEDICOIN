"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@cosmjs/crypto");
const proto_signing_1 = require("@cosmjs/proto-signing");
const Wallet_1 = __importDefault(require("./Wallet"));
/**
 * Used to generate a wallet for a Terra blockchain
 */
class TerraWallet extends Wallet_1.default {
    static async fromMnemonic(name, mnemonic, passphrase) {
        const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            hdPaths: [(0, crypto_1.stringToPath)("m/44'/330'/0'/0/0")],
            prefix: "terra",
        });
        const key = await wallet.serialize(passphrase);
        return new Wallet_1.default(name, key, "terra");
    }
}
exports.default = TerraWallet;
