// package: injective.types.v1beta1
// file: injective/types/v1beta1/account.proto

import * as jspb from "google-protobuf";
import * as cosmos_auth_v1beta1_auth_pb from "../../../cosmos/auth/v1beta1/auth_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class EthAccount extends jspb.Message {
  hasBaseAccount(): boolean;
  clearBaseAccount(): void;
  getBaseAccount(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
  setBaseAccount(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): void;

  getCodeHash(): Uint8Array | string;
  getCodeHash_asU8(): Uint8Array;
  getCodeHash_asB64(): string;
  setCodeHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EthAccount.AsObject;
  static toObject(includeInstance: boolean, msg: EthAccount): EthAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EthAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EthAccount;
  static deserializeBinaryFromReader(message: EthAccount, reader: jspb.BinaryReader): EthAccount;
}

export namespace EthAccount {
  export type AsObject = {
    baseAccount?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject,
    codeHash: Uint8Array | string,
  }
}

