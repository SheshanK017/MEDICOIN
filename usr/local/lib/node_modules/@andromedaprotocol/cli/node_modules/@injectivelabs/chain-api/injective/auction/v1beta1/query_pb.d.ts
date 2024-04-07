// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as injective_auction_v1beta1_auction_pb from "../../../injective/auction/v1beta1/auction_pb";
import * as injective_auction_v1beta1_genesis_pb from "../../../injective/auction/v1beta1/genesis_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class QueryAuctionParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAuctionParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAuctionParamsRequest): QueryAuctionParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAuctionParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAuctionParamsRequest;
  static deserializeBinaryFromReader(message: QueryAuctionParamsRequest, reader: jspb.BinaryReader): QueryAuctionParamsRequest;
}

export namespace QueryAuctionParamsRequest {
  export type AsObject = {
  }
}

export class QueryAuctionParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_auction_v1beta1_auction_pb.Params | undefined;
  setParams(value?: injective_auction_v1beta1_auction_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAuctionParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAuctionParamsResponse): QueryAuctionParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryAuctionParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAuctionParamsResponse;
  static deserializeBinaryFromReader(message: QueryAuctionParamsResponse, reader: jspb.BinaryReader): QueryAuctionParamsResponse;
}

export namespace QueryAuctionParamsResponse {
  export type AsObject = {
    params?: injective_auction_v1beta1_auction_pb.Params.AsObject,
  }
}

export class QueryCurrentAuctionBasketRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentAuctionBasketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentAuctionBasketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentAuctionBasketRequest;
  static deserializeBinaryFromReader(message: QueryCurrentAuctionBasketRequest, reader: jspb.BinaryReader): QueryCurrentAuctionBasketRequest;
}

export namespace QueryCurrentAuctionBasketRequest {
  export type AsObject = {
  }
}

export class QueryCurrentAuctionBasketResponse extends jspb.Message {
  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getAuctionround(): number;
  setAuctionround(value: number): void;

  getAuctionclosingtime(): number;
  setAuctionclosingtime(value: number): void;

  getHighestbidder(): string;
  setHighestbidder(value: string): void;

  getHighestbidamount(): string;
  setHighestbidamount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentAuctionBasketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentAuctionBasketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentAuctionBasketResponse;
  static deserializeBinaryFromReader(message: QueryCurrentAuctionBasketResponse, reader: jspb.BinaryReader): QueryCurrentAuctionBasketResponse;
}

export namespace QueryCurrentAuctionBasketResponse {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    auctionround: number,
    auctionclosingtime: number,
    highestbidder: string,
    highestbidamount: string,
  }
}

export class QueryModuleStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleStateRequest): QueryModuleStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleStateRequest;
  static deserializeBinaryFromReader(message: QueryModuleStateRequest, reader: jspb.BinaryReader): QueryModuleStateRequest;
}

export namespace QueryModuleStateRequest {
  export type AsObject = {
  }
}

export class QueryModuleStateResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): injective_auction_v1beta1_genesis_pb.GenesisState | undefined;
  setState(value?: injective_auction_v1beta1_genesis_pb.GenesisState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleStateResponse): QueryModuleStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleStateResponse;
  static deserializeBinaryFromReader(message: QueryModuleStateResponse, reader: jspb.BinaryReader): QueryModuleStateResponse;
}

export namespace QueryModuleStateResponse {
  export type AsObject = {
    state?: injective_auction_v1beta1_genesis_pb.GenesisState.AsObject,
  }
}

