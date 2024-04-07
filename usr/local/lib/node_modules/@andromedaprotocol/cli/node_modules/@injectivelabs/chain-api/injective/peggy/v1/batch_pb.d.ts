// package: injective.peggy.v1
// file: injective/peggy/v1/batch.proto

import * as jspb from "google-protobuf";
import * as injective_peggy_v1_attestation_pb from "../../../injective/peggy/v1/attestation_pb";

export class OutgoingTxBatch extends jspb.Message {
  getBatchNonce(): number;
  setBatchNonce(value: number): void;

  getBatchTimeout(): number;
  setBatchTimeout(value: number): void;

  clearTransactionsList(): void;
  getTransactionsList(): Array<OutgoingTransferTx>;
  setTransactionsList(value: Array<OutgoingTransferTx>): void;
  addTransactions(value?: OutgoingTransferTx, index?: number): OutgoingTransferTx;

  getTokenContract(): string;
  setTokenContract(value: string): void;

  getBlock(): number;
  setBlock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutgoingTxBatch.AsObject;
  static toObject(includeInstance: boolean, msg: OutgoingTxBatch): OutgoingTxBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutgoingTxBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutgoingTxBatch;
  static deserializeBinaryFromReader(message: OutgoingTxBatch, reader: jspb.BinaryReader): OutgoingTxBatch;
}

export namespace OutgoingTxBatch {
  export type AsObject = {
    batchNonce: number,
    batchTimeout: number,
    transactionsList: Array<OutgoingTransferTx.AsObject>,
    tokenContract: string,
    block: number,
  }
}

export class OutgoingTransferTx extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSender(): string;
  setSender(value: string): void;

  getDestAddress(): string;
  setDestAddress(value: string): void;

  hasErc20Token(): boolean;
  clearErc20Token(): void;
  getErc20Token(): injective_peggy_v1_attestation_pb.ERC20Token | undefined;
  setErc20Token(value?: injective_peggy_v1_attestation_pb.ERC20Token): void;

  hasErc20Fee(): boolean;
  clearErc20Fee(): void;
  getErc20Fee(): injective_peggy_v1_attestation_pb.ERC20Token | undefined;
  setErc20Fee(value?: injective_peggy_v1_attestation_pb.ERC20Token): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutgoingTransferTx.AsObject;
  static toObject(includeInstance: boolean, msg: OutgoingTransferTx): OutgoingTransferTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutgoingTransferTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutgoingTransferTx;
  static deserializeBinaryFromReader(message: OutgoingTransferTx, reader: jspb.BinaryReader): OutgoingTransferTx;
}

export namespace OutgoingTransferTx {
  export type AsObject = {
    id: number,
    sender: string,
    destAddress: string,
    erc20Token?: injective_peggy_v1_attestation_pb.ERC20Token.AsObject,
    erc20Fee?: injective_peggy_v1_attestation_pb.ERC20Token.AsObject,
  }
}

