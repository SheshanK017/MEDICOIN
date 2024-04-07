// package: injective.peggy.v1
// file: injective/peggy/v1/pool.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class IDSet extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDSet.AsObject;
  static toObject(includeInstance: boolean, msg: IDSet): IDSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IDSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDSet;
  static deserializeBinaryFromReader(message: IDSet, reader: jspb.BinaryReader): IDSet;
}

export namespace IDSet {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class BatchFees extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getTotalFees(): string;
  setTotalFees(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchFees.AsObject;
  static toObject(includeInstance: boolean, msg: BatchFees): BatchFees.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchFees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchFees;
  static deserializeBinaryFromReader(message: BatchFees, reader: jspb.BinaryReader): BatchFees;
}

export namespace BatchFees {
  export type AsObject = {
    token: string,
    totalFees: string,
  }
}

