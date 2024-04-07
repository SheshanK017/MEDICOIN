import { InstantiateOptions, MsgExecuteContractEncodeObject, MsgInstantiateContractEncodeObject, MsgMigrateContractEncodeObject, MsgStoreCodeEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/proto-signing";
import { MsgSendEncodeObject } from "@cosmjs/stargate";
import { Msg } from "..";
import ChainClient from "./ChainClient";
export default class BaseChainClient implements Partial<ChainClient> {
    signingClient?: ChainClient["signingClient"];
    queryClient?: ChainClient["queryClient"];
    signer: string;
    protected preMessage(signed?: boolean): void;
    get isConnected(): boolean;
    encodeExecuteMsg(address: string, msg: Msg, funds: Coin[]): MsgExecuteContractEncodeObject;
    encodeInstantiateMsg(codeId: number, msg: Msg, label: string, options?: InstantiateOptions): MsgInstantiateContractEncodeObject;
    encodeUploadMessage(wasmByteCode: Uint8Array): MsgStoreCodeEncodeObject;
    encodeMigrateMessage(address: string, codeId: number, msg: Msg): MsgMigrateContractEncodeObject;
    encodeSendMessage(receivingAddress: string, amount: Coin[]): MsgSendEncodeObject;
}
