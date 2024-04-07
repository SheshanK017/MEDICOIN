import Wallet from "./Wallet";
export { default as Wallet } from "./Wallet";
export declare function generateWalletFromMnemonic(name: string, mnemonic: string, passphrase: string, prefix: string): Promise<Wallet>;
export declare function newWallet(name: string, key: string, prefix: string): Wallet;
