"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newWallet = exports.generateWalletFromMnemonic = exports.Wallet = void 0;
const EtherWallet_1 = __importDefault(require("./EtherWallet"));
const TerraWallet_1 = __importDefault(require("./TerraWallet"));
const Wallet_1 = __importDefault(require("./Wallet"));
var Wallet_2 = require("./Wallet");
Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return __importDefault(Wallet_2).default; } });
async function generateWalletFromMnemonic(name, mnemonic, passphrase, prefix) {
    switch (prefix) {
        case "inj":
            return EtherWallet_1.default.fromMnemonic(name, mnemonic, passphrase);
        case "terra":
            return TerraWallet_1.default.fromMnemonic(name, mnemonic, passphrase);
        default:
            return Wallet_1.default.fromMnemonic(name, mnemonic, passphrase, prefix);
    }
}
exports.generateWalletFromMnemonic = generateWalletFromMnemonic;
function newWallet(name, key, prefix) {
    switch (prefix) {
        case "inj":
            return new EtherWallet_1.default(name, key, prefix);
        case "terra":
            return new TerraWallet_1.default(name, key, prefix);
        default:
            return new Wallet_1.default(name, key, prefix);
    }
}
exports.newWallet = newWallet;
