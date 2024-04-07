"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arch3_js_1 = require("@archwayhq/arch3.js");
const BaseChainClient_1 = __importDefault(require("./BaseChainClient"));
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const tx_1 = require("cosmjs-types/cosmos/tx/v1beta1/tx");
class ArchwayClient extends BaseChainClient_1.default {
    async connect(endpoint, signer, options) {
        delete this.signingClient;
        delete this.queryClient;
        this.gasPrice = options?.gasPrice;
        this.queryClient = await cosmwasm_stargate_1.CosmWasmClient.connect(endpoint);
        if (signer) {
            this.signingClient = await arch3_js_1.SigningArchwayClient.connectWithSigner(endpoint, signer, {
                gasAdjustment: 1.4,
            });
            const [account] = await signer.getAccounts();
            this.signer = account.address;
        }
    }
    async disconnect() {
        if (this.signingClient)
            this.signingClient.disconnect();
        if (this.queryClient)
            this.queryClient.disconnect();
        delete this.signingClient;
        delete this.queryClient;
        this.signer = "";
        delete this.gasPrice;
    }
    async sign(messages, fee, memo = "") {
        this.preMessage(true);
        return await this.signingClient.sign(this.signer, messages, fee, memo);
    }
    async broadcast(tx) {
        this.preMessage(true);
        const txBytes = tx_1.TxRaw.encode(tx).finish();
        return await this.signingClient.broadcastTx(txBytes);
    }
    async signAndBroadcast(messages, fee = "auto", memo) {
        this.preMessage(true);
        return await this.signingClient.signAndBroadcast(this.signer, messages, fee, memo);
    }
    async simulateMulti(messages, _fee = "auto", memo) {
        this.preMessage();
        return this.signingClient.simulate(this.signer, messages, memo);
    }
    async simulate(message, _fee, memo) {
        this.preMessage();
        return this.signingClient.simulate(this.signer, [message], memo);
    }
    async execute(contractAddress, msg, _fee, memo, funds) {
        this.preMessage(true);
        return await this.signingClient.execute(this.signer, contractAddress, msg, "auto", memo, funds);
    }
    async simulateExecute(address, msg, funds, _fee, memo) {
        const message = this.encodeExecuteMsg(address, msg, funds);
        return this.simulate(message, undefined, memo);
    }
    async upload(code, fee = "auto", memo) {
        this.preMessage();
        const result = await this.signingClient.upload(this.signer, code, fee, memo);
        return { ...result };
    }
    async simulateUpload(code, _fee, memo) {
        const message = this.encodeUploadMessage(code);
        return this.simulate(message, undefined, memo);
    }
    async instantiate(codeId, msg, label, fee = "auto", options) {
        this.preMessage(true);
        return this.signingClient.instantiate(this.signer, codeId, msg, label, fee, options);
    }
    async simulateInstantiate(codeId, msg, label, fee, options) {
        const message = this.encodeInstantiateMsg(codeId, msg, label);
        return this.simulate(message, fee, options?.memo);
    }
    async migrate(contractAddress, codeId, msg, fee = "auto", memo) {
        this.preMessage(true);
        return this.signingClient.migrate(this.signer, contractAddress, codeId, msg, fee, memo);
    }
    async simulateMigrate(contractAddress, codeId, msg, fee, memo) {
        const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
        return this.simulate(message, fee, memo);
    }
    async sendTokens(receivingAddress, amount, fee = "auto", memo) {
        return this.signingClient?.sendTokens(this.signer, receivingAddress, amount, fee, memo);
    }
}
exports.default = ArchwayClient;
