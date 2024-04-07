// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as injective_insurance_v1beta1_insurance_pb from "../../../injective/insurance/v1beta1/insurance_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as injective_insurance_v1beta1_genesis_pb from "../../../injective/insurance/v1beta1/genesis_pb";

export class QueryInsuranceParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInsuranceParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInsuranceParamsRequest): QueryInsuranceParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInsuranceParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInsuranceParamsRequest;
  static deserializeBinaryFromReader(message: QueryInsuranceParamsRequest, reader: jspb.BinaryReader): QueryInsuranceParamsRequest;
}

export namespace QueryInsuranceParamsRequest {
  export type AsObject = {
  }
}

export class QueryInsuranceParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_insurance_v1beta1_insurance_pb.Params | undefined;
  setParams(value?: injective_insurance_v1beta1_insurance_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInsuranceParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInsuranceParamsResponse): QueryInsuranceParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInsuranceParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInsuranceParamsResponse;
  static deserializeBinaryFromReader(message: QueryInsuranceParamsResponse, reader: jspb.BinaryReader): QueryInsuranceParamsResponse;
}

export namespace QueryInsuranceParamsResponse {
  export type AsObject = {
    params?: injective_insurance_v1beta1_insurance_pb.Params.AsObject,
  }
}

export class QueryInsuranceFundRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInsuranceFundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInsuranceFundRequest): QueryInsuranceFundRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInsuranceFundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInsuranceFundRequest;
  static deserializeBinaryFromReader(message: QueryInsuranceFundRequest, reader: jspb.BinaryReader): QueryInsuranceFundRequest;
}

export namespace QueryInsuranceFundRequest {
  export type AsObject = {
    marketId: string,
  }
}

export class QueryInsuranceFundResponse extends jspb.Message {
  hasFund(): boolean;
  clearFund(): void;
  getFund(): injective_insurance_v1beta1_insurance_pb.InsuranceFund | undefined;
  setFund(value?: injective_insurance_v1beta1_insurance_pb.InsuranceFund): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInsuranceFundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInsuranceFundResponse): QueryInsuranceFundResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInsuranceFundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInsuranceFundResponse;
  static deserializeBinaryFromReader(message: QueryInsuranceFundResponse, reader: jspb.BinaryReader): QueryInsuranceFundResponse;
}

export namespace QueryInsuranceFundResponse {
  export type AsObject = {
    fund?: injective_insurance_v1beta1_insurance_pb.InsuranceFund.AsObject,
  }
}

export class QueryInsuranceFundsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInsuranceFundsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInsuranceFundsRequest): QueryInsuranceFundsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInsuranceFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInsuranceFundsRequest;
  static deserializeBinaryFromReader(message: QueryInsuranceFundsRequest, reader: jspb.BinaryReader): QueryInsuranceFundsRequest;
}

export namespace QueryInsuranceFundsRequest {
  export type AsObject = {
  }
}

export class QueryInsuranceFundsResponse extends jspb.Message {
  clearFundsList(): void;
  getFundsList(): Array<injective_insurance_v1beta1_insurance_pb.InsuranceFund>;
  setFundsList(value: Array<injective_insurance_v1beta1_insurance_pb.InsuranceFund>): void;
  addFunds(value?: injective_insurance_v1beta1_insurance_pb.InsuranceFund, index?: number): injective_insurance_v1beta1_insurance_pb.InsuranceFund;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInsuranceFundsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInsuranceFundsResponse): QueryInsuranceFundsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryInsuranceFundsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInsuranceFundsResponse;
  static deserializeBinaryFromReader(message: QueryInsuranceFundsResponse, reader: jspb.BinaryReader): QueryInsuranceFundsResponse;
}

export namespace QueryInsuranceFundsResponse {
  export type AsObject = {
    fundsList: Array<injective_insurance_v1beta1_insurance_pb.InsuranceFund.AsObject>,
  }
}

export class QueryEstimatedRedemptionsRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEstimatedRedemptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryEstimatedRedemptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEstimatedRedemptionsRequest;
  static deserializeBinaryFromReader(message: QueryEstimatedRedemptionsRequest, reader: jspb.BinaryReader): QueryEstimatedRedemptionsRequest;
}

export namespace QueryEstimatedRedemptionsRequest {
  export type AsObject = {
    marketid: string,
    address: string,
  }
}

export class QueryEstimatedRedemptionsResponse extends jspb.Message {
  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEstimatedRedemptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryEstimatedRedemptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEstimatedRedemptionsResponse;
  static deserializeBinaryFromReader(message: QueryEstimatedRedemptionsResponse, reader: jspb.BinaryReader): QueryEstimatedRedemptionsResponse;
}

export namespace QueryEstimatedRedemptionsResponse {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class QueryPendingRedemptionsRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingRedemptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingRedemptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingRedemptionsRequest;
  static deserializeBinaryFromReader(message: QueryPendingRedemptionsRequest, reader: jspb.BinaryReader): QueryPendingRedemptionsRequest;
}

export namespace QueryPendingRedemptionsRequest {
  export type AsObject = {
    marketid: string,
    address: string,
  }
}

export class QueryPendingRedemptionsResponse extends jspb.Message {
  clearAmountList(): void;
  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingRedemptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingRedemptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingRedemptionsResponse;
  static deserializeBinaryFromReader(message: QueryPendingRedemptionsResponse, reader: jspb.BinaryReader): QueryPendingRedemptionsResponse;
}

export namespace QueryPendingRedemptionsResponse {
  export type AsObject = {
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
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
  getState(): injective_insurance_v1beta1_genesis_pb.GenesisState | undefined;
  setState(value?: injective_insurance_v1beta1_genesis_pb.GenesisState): void;

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
    state?: injective_insurance_v1beta1_genesis_pb.GenesisState.AsObject,
  }
}

