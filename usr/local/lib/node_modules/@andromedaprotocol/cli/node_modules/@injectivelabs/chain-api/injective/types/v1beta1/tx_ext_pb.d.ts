// package: injective.types.v1beta1
// file: injective/types/v1beta1/tx_ext.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class ExtensionOptionsWeb3Tx extends jspb.Message {
  getTypeddatachainid(): number;
  setTypeddatachainid(value: number): void;

  getFeepayer(): string;
  setFeepayer(value: string): void;

  getFeepayersig(): Uint8Array | string;
  getFeepayersig_asU8(): Uint8Array;
  getFeepayersig_asB64(): string;
  setFeepayersig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionOptionsWeb3Tx.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3Tx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionOptionsWeb3Tx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionOptionsWeb3Tx;
  static deserializeBinaryFromReader(message: ExtensionOptionsWeb3Tx, reader: jspb.BinaryReader): ExtensionOptionsWeb3Tx;
}

export namespace ExtensionOptionsWeb3Tx {
  export type AsObject = {
    typeddatachainid: number,
    feepayer: string,
    feepayersig: Uint8Array | string,
  }
}

