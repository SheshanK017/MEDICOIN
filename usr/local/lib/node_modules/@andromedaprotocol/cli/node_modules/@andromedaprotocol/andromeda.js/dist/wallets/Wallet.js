"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proto_signing_1 = require("@cosmjs/proto-signing");
/**
 * Used to generate a client wallet by Mnemonic
 */
class Wallet {
    constructor(name, key, prefix) {
        this.name = name;
        this.key = key;
        this.prefix = prefix;
    }
    /**
     * Generates a new wallet from a given mnemonic
     * @param name
     * @param mnemonic
     * @param passphrase
     * @param prefix
     * @returns
     */
    static async fromMnemonic(name, mnemonic, passphrase, prefix) {
        const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            prefix,
        });
        const key = await wallet.serialize(passphrase);
        return new Wallet(name, key, prefix);
    }
    /**
     * Get wallet associated with the provided mnemonic
     */
    async getWallet(passphrase) {
        return await proto_signing_1.DirectSecp256k1HdWallet.deserialize(this.key, passphrase);
    }
    /**
     * Get all accounts associated with the wallet
     */
    async getAccounts(passphrase) {
        const wallet = await this.getWallet(passphrase);
        return await wallet.getAccounts();
    }
    /**
     * Provides the first OfflineSigner object associated with the wallet. Can be used for signing messages.
     */
    async getAddress(passphrase) {
        const [firstAccount] = await this.getAccounts(passphrase);
        return firstAccount.address;
    }
}
exports.default = Wallet;
