import { DeliverTxResponse, ExecuteResult, InstantiateOptions, InstantiateResult, MigrateResult, UploadResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, EncodeObject, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { Log } from "@cosmjs/stargate/build/logs";
import { LCDClient, Tx } from "@terra-money/terra.js";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Fee, Msg } from "..";
import BaseChainClient from "./BaseChainClient";
import ChainClient from "./ChainClient";
export default class TerraClient extends BaseChainClient implements ChainClient {
    private directSigner?;
    signingClient?: LCDClient;
    connect(endpoint: string, signer?: OfflineDirectSigner): Promise<void>;
    disconnect(): Promise<void>;
    broadcast(tx: Tx): Promise<DeliverTxResponse & {
        logs: readonly Log[];
    }>;
    createTx(messages: EncodeObject[], _fee?: Fee, memo?: string): Promise<Tx>;
    signAndBroadcast(messages: EncodeObject[], fee?: Fee, memo?: string | undefined): Promise<DeliverTxResponse & {
        logs: readonly Log[];
    }>;
    sign(messages: EncodeObject[], fee?: Fee, memo?: string): Promise<TxRaw>;
    simulate(message: EncodeObject, fee?: Fee | undefined, memo?: string | undefined): Promise<number>;
    simulateMulti(messages: readonly EncodeObject[], fee?: Fee | undefined, memo?: string | undefined): Promise<number>;
    execute(contractAddress: string, msg: Msg, fee?: Fee, memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult>;
    simulateExecute(address: string, msg: Msg, funds: Coin[], fee?: Fee | undefined, memo?: string | undefined): Promise<number | undefined>;
    upload(code: Uint8Array, fee?: Fee | undefined, memo?: string | undefined): Promise<UploadResult>;
    simulateUpload(code: Uint8Array, fee?: Fee, memo?: string | undefined): Promise<number | undefined>;
    instantiate(codeId: number, msg: Msg, label: string, fee?: Fee, options?: InstantiateOptions): Promise<InstantiateResult>;
    simulateInstantiate(codeId: number, msg: Msg, label: string, fee?: Fee, options?: InstantiateOptions): Promise<number | undefined>;
    migrate(contractAddress: string, codeId: number, msg: Msg, fee?: Fee, memo?: string): Promise<MigrateResult>;
    simulateMigrate(contractAddress: string, codeId: number, msg: Msg, fee?: Fee, memo?: string | undefined): Promise<number | undefined>;
    sendTokens(receivingAddress: string, amount: readonly Coin[], fee?: Fee, memo?: string): Promise<DeliverTxResponse>;
}
