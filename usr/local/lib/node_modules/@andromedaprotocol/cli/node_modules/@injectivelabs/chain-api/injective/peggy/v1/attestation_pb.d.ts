// package: injective.peggy.v1
// file: injective/peggy/v1/attestation.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Attestation extends jspb.Message {
  getObserved(): boolean;
  setObserved(value: boolean): void;

  clearVotesList(): void;
  getVotesList(): Array<string>;
  setVotesList(value: Array<string>): void;
  addVotes(value: string, index?: number): string;

  getHeight(): number;
  setHeight(value: number): void;

  hasClaim(): boolean;
  clearClaim(): void;
  getClaim(): google_protobuf_any_pb.Any | undefined;
  setClaim(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attestation.AsObject;
  static toObject(includeInstance: boolean, msg: Attestation): Attestation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attestation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attestation;
  static deserializeBinaryFromReader(message: Attestation, reader: jspb.BinaryReader): Attestation;
}

export namespace Attestation {
  export type AsObject = {
    observed: boolean,
    votesList: Array<string>,
    height: number,
    claim?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ERC20Token extends jspb.Message {
  getContract(): string;
  setContract(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20Token.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20Token): ERC20Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20Token;
  static deserializeBinaryFromReader(message: ERC20Token, reader: jspb.BinaryReader): ERC20Token;
}

export namespace ERC20Token {
  export type AsObject = {
    contract: string,
    amount: string,
  }
}

export interface ClaimTypeMap {
  CLAIM_TYPE_UNKNOWN: 0;
  CLAIM_TYPE_DEPOSIT: 1;
  CLAIM_TYPE_WITHDRAW: 2;
  CLAIM_TYPE_ERC20_DEPLOYED: 3;
  CLAIM_TYPE_VALSET_UPDATED: 4;
}

export const ClaimType: ClaimTypeMap;

