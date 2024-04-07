import Wallet from "./Wallet";
/**
 * Used to generate a wallet for a Terra blockchain
 */
export default class TerraWallet extends Wallet {
    static fromMnemonic(name: string, mnemonic: string, passphrase: string): Promise<Wallet>;
}
