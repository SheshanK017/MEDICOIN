// package: injective.peggy.v1
// file: injective/peggy/v1/query.proto

import * as jspb from "google-protobuf";
import * as injective_peggy_v1_genesis_pb from "../../../injective/peggy/v1/genesis_pb";
import * as injective_peggy_v1_types_pb from "../../../injective/peggy/v1/types_pb";
import * as injective_peggy_v1_msgs_pb from "../../../injective/peggy/v1/msgs_pb";
import * as injective_peggy_v1_pool_pb from "../../../injective/peggy/v1/pool_pb";
import * as injective_peggy_v1_batch_pb from "../../../injective/peggy/v1/batch_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
  }
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_peggy_v1_genesis_pb.Params | undefined;
  setParams(value?: injective_peggy_v1_genesis_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: injective_peggy_v1_genesis_pb.Params.AsObject,
  }
}

export class QueryCurrentValsetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentValsetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentValsetRequest): QueryCurrentValsetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentValsetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentValsetRequest;
  static deserializeBinaryFromReader(message: QueryCurrentValsetRequest, reader: jspb.BinaryReader): QueryCurrentValsetRequest;
}

export namespace QueryCurrentValsetRequest {
  export type AsObject = {
  }
}

export class QueryCurrentValsetResponse extends jspb.Message {
  hasValset(): boolean;
  clearValset(): void;
  getValset(): injective_peggy_v1_types_pb.Valset | undefined;
  setValset(value?: injective_peggy_v1_types_pb.Valset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCurrentValsetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCurrentValsetResponse): QueryCurrentValsetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCurrentValsetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCurrentValsetResponse;
  static deserializeBinaryFromReader(message: QueryCurrentValsetResponse, reader: jspb.BinaryReader): QueryCurrentValsetResponse;
}

export namespace QueryCurrentValsetResponse {
  export type AsObject = {
    valset?: injective_peggy_v1_types_pb.Valset.AsObject,
  }
}

export class QueryValsetRequestRequest extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValsetRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValsetRequestRequest): QueryValsetRequestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValsetRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValsetRequestRequest;
  static deserializeBinaryFromReader(message: QueryValsetRequestRequest, reader: jspb.BinaryReader): QueryValsetRequestRequest;
}

export namespace QueryValsetRequestRequest {
  export type AsObject = {
    nonce: number,
  }
}

export class QueryValsetRequestResponse extends jspb.Message {
  hasValset(): boolean;
  clearValset(): void;
  getValset(): injective_peggy_v1_types_pb.Valset | undefined;
  setValset(value?: injective_peggy_v1_types_pb.Valset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValsetRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValsetRequestResponse): QueryValsetRequestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValsetRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValsetRequestResponse;
  static deserializeBinaryFromReader(message: QueryValsetRequestResponse, reader: jspb.BinaryReader): QueryValsetRequestResponse;
}

export namespace QueryValsetRequestResponse {
  export type AsObject = {
    valset?: injective_peggy_v1_types_pb.Valset.AsObject,
  }
}

export class QueryValsetConfirmRequest extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValsetConfirmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValsetConfirmRequest): QueryValsetConfirmRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValsetConfirmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmRequest;
  static deserializeBinaryFromReader(message: QueryValsetConfirmRequest, reader: jspb.BinaryReader): QueryValsetConfirmRequest;
}

export namespace QueryValsetConfirmRequest {
  export type AsObject = {
    nonce: number,
    address: string,
  }
}

export class QueryValsetConfirmResponse extends jspb.Message {
  hasConfirm(): boolean;
  clearConfirm(): void;
  getConfirm(): injective_peggy_v1_msgs_pb.MsgValsetConfirm | undefined;
  setConfirm(value?: injective_peggy_v1_msgs_pb.MsgValsetConfirm): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValsetConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValsetConfirmResponse): QueryValsetConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValsetConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmResponse;
  static deserializeBinaryFromReader(message: QueryValsetConfirmResponse, reader: jspb.BinaryReader): QueryValsetConfirmResponse;
}

export namespace QueryValsetConfirmResponse {
  export type AsObject = {
    confirm?: injective_peggy_v1_msgs_pb.MsgValsetConfirm.AsObject,
  }
}

export class QueryValsetConfirmsByNonceRequest extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValsetConfirmsByNonceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValsetConfirmsByNonceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmsByNonceRequest;
  static deserializeBinaryFromReader(message: QueryValsetConfirmsByNonceRequest, reader: jspb.BinaryReader): QueryValsetConfirmsByNonceRequest;
}

export namespace QueryValsetConfirmsByNonceRequest {
  export type AsObject = {
    nonce: number,
  }
}

export class QueryValsetConfirmsByNonceResponse extends jspb.Message {
  clearConfirmsList(): void;
  getConfirmsList(): Array<injective_peggy_v1_msgs_pb.MsgValsetConfirm>;
  setConfirmsList(value: Array<injective_peggy_v1_msgs_pb.MsgValsetConfirm>): void;
  addConfirms(value?: injective_peggy_v1_msgs_pb.MsgValsetConfirm, index?: number): injective_peggy_v1_msgs_pb.MsgValsetConfirm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryValsetConfirmsByNonceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryValsetConfirmsByNonceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryValsetConfirmsByNonceResponse;
  static deserializeBinaryFromReader(message: QueryValsetConfirmsByNonceResponse, reader: jspb.BinaryReader): QueryValsetConfirmsByNonceResponse;
}

export namespace QueryValsetConfirmsByNonceResponse {
  export type AsObject = {
    confirmsList: Array<injective_peggy_v1_msgs_pb.MsgValsetConfirm.AsObject>,
  }
}

export class QueryLastValsetRequestsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastValsetRequestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastValsetRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastValsetRequestsRequest;
  static deserializeBinaryFromReader(message: QueryLastValsetRequestsRequest, reader: jspb.BinaryReader): QueryLastValsetRequestsRequest;
}

export namespace QueryLastValsetRequestsRequest {
  export type AsObject = {
  }
}

export class QueryLastValsetRequestsResponse extends jspb.Message {
  clearValsetsList(): void;
  getValsetsList(): Array<injective_peggy_v1_types_pb.Valset>;
  setValsetsList(value: Array<injective_peggy_v1_types_pb.Valset>): void;
  addValsets(value?: injective_peggy_v1_types_pb.Valset, index?: number): injective_peggy_v1_types_pb.Valset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastValsetRequestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastValsetRequestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastValsetRequestsResponse;
  static deserializeBinaryFromReader(message: QueryLastValsetRequestsResponse, reader: jspb.BinaryReader): QueryLastValsetRequestsResponse;
}

export namespace QueryLastValsetRequestsResponse {
  export type AsObject = {
    valsetsList: Array<injective_peggy_v1_types_pb.Valset.AsObject>,
  }
}

export class QueryLastPendingValsetRequestByAddrRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastPendingValsetRequestByAddrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastPendingValsetRequestByAddrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastPendingValsetRequestByAddrRequest;
  static deserializeBinaryFromReader(message: QueryLastPendingValsetRequestByAddrRequest, reader: jspb.BinaryReader): QueryLastPendingValsetRequestByAddrRequest;
}

export namespace QueryLastPendingValsetRequestByAddrRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryLastPendingValsetRequestByAddrResponse extends jspb.Message {
  clearValsetsList(): void;
  getValsetsList(): Array<injective_peggy_v1_types_pb.Valset>;
  setValsetsList(value: Array<injective_peggy_v1_types_pb.Valset>): void;
  addValsets(value?: injective_peggy_v1_types_pb.Valset, index?: number): injective_peggy_v1_types_pb.Valset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastPendingValsetRequestByAddrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastPendingValsetRequestByAddrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastPendingValsetRequestByAddrResponse;
  static deserializeBinaryFromReader(message: QueryLastPendingValsetRequestByAddrResponse, reader: jspb.BinaryReader): QueryLastPendingValsetRequestByAddrResponse;
}

export namespace QueryLastPendingValsetRequestByAddrResponse {
  export type AsObject = {
    valsetsList: Array<injective_peggy_v1_types_pb.Valset.AsObject>,
  }
}

export class QueryBatchFeeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBatchFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBatchFeeRequest): QueryBatchFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBatchFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBatchFeeRequest;
  static deserializeBinaryFromReader(message: QueryBatchFeeRequest, reader: jspb.BinaryReader): QueryBatchFeeRequest;
}

export namespace QueryBatchFeeRequest {
  export type AsObject = {
  }
}

export class QueryBatchFeeResponse extends jspb.Message {
  clearBatchfeesList(): void;
  getBatchfeesList(): Array<injective_peggy_v1_pool_pb.BatchFees>;
  setBatchfeesList(value: Array<injective_peggy_v1_pool_pb.BatchFees>): void;
  addBatchfees(value?: injective_peggy_v1_pool_pb.BatchFees, index?: number): injective_peggy_v1_pool_pb.BatchFees;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBatchFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBatchFeeResponse): QueryBatchFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBatchFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBatchFeeResponse;
  static deserializeBinaryFromReader(message: QueryBatchFeeResponse, reader: jspb.BinaryReader): QueryBatchFeeResponse;
}

export namespace QueryBatchFeeResponse {
  export type AsObject = {
    batchfeesList: Array<injective_peggy_v1_pool_pb.BatchFees.AsObject>,
  }
}

export class QueryLastPendingBatchRequestByAddrRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastPendingBatchRequestByAddrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastPendingBatchRequestByAddrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastPendingBatchRequestByAddrRequest;
  static deserializeBinaryFromReader(message: QueryLastPendingBatchRequestByAddrRequest, reader: jspb.BinaryReader): QueryLastPendingBatchRequestByAddrRequest;
}

export namespace QueryLastPendingBatchRequestByAddrRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryLastPendingBatchRequestByAddrResponse extends jspb.Message {
  hasBatch(): boolean;
  clearBatch(): void;
  getBatch(): injective_peggy_v1_batch_pb.OutgoingTxBatch | undefined;
  setBatch(value?: injective_peggy_v1_batch_pb.OutgoingTxBatch): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastPendingBatchRequestByAddrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastPendingBatchRequestByAddrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastPendingBatchRequestByAddrResponse;
  static deserializeBinaryFromReader(message: QueryLastPendingBatchRequestByAddrResponse, reader: jspb.BinaryReader): QueryLastPendingBatchRequestByAddrResponse;
}

export namespace QueryLastPendingBatchRequestByAddrResponse {
  export type AsObject = {
    batch?: injective_peggy_v1_batch_pb.OutgoingTxBatch.AsObject,
  }
}

export class QueryOutgoingTxBatchesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOutgoingTxBatchesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOutgoingTxBatchesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOutgoingTxBatchesRequest;
  static deserializeBinaryFromReader(message: QueryOutgoingTxBatchesRequest, reader: jspb.BinaryReader): QueryOutgoingTxBatchesRequest;
}

export namespace QueryOutgoingTxBatchesRequest {
  export type AsObject = {
  }
}

export class QueryOutgoingTxBatchesResponse extends jspb.Message {
  clearBatchesList(): void;
  getBatchesList(): Array<injective_peggy_v1_batch_pb.OutgoingTxBatch>;
  setBatchesList(value: Array<injective_peggy_v1_batch_pb.OutgoingTxBatch>): void;
  addBatches(value?: injective_peggy_v1_batch_pb.OutgoingTxBatch, index?: number): injective_peggy_v1_batch_pb.OutgoingTxBatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOutgoingTxBatchesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOutgoingTxBatchesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOutgoingTxBatchesResponse;
  static deserializeBinaryFromReader(message: QueryOutgoingTxBatchesResponse, reader: jspb.BinaryReader): QueryOutgoingTxBatchesResponse;
}

export namespace QueryOutgoingTxBatchesResponse {
  export type AsObject = {
    batchesList: Array<injective_peggy_v1_batch_pb.OutgoingTxBatch.AsObject>,
  }
}

export class QueryBatchRequestByNonceRequest extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  getContractAddress(): string;
  setContractAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBatchRequestByNonceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBatchRequestByNonceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBatchRequestByNonceRequest;
  static deserializeBinaryFromReader(message: QueryBatchRequestByNonceRequest, reader: jspb.BinaryReader): QueryBatchRequestByNonceRequest;
}

export namespace QueryBatchRequestByNonceRequest {
  export type AsObject = {
    nonce: number,
    contractAddress: string,
  }
}

export class QueryBatchRequestByNonceResponse extends jspb.Message {
  hasBatch(): boolean;
  clearBatch(): void;
  getBatch(): injective_peggy_v1_batch_pb.OutgoingTxBatch | undefined;
  setBatch(value?: injective_peggy_v1_batch_pb.OutgoingTxBatch): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBatchRequestByNonceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBatchRequestByNonceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBatchRequestByNonceResponse;
  static deserializeBinaryFromReader(message: QueryBatchRequestByNonceResponse, reader: jspb.BinaryReader): QueryBatchRequestByNonceResponse;
}

export namespace QueryBatchRequestByNonceResponse {
  export type AsObject = {
    batch?: injective_peggy_v1_batch_pb.OutgoingTxBatch.AsObject,
  }
}

export class QueryBatchConfirmsRequest extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  getContractAddress(): string;
  setContractAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBatchConfirmsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBatchConfirmsRequest): QueryBatchConfirmsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBatchConfirmsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBatchConfirmsRequest;
  static deserializeBinaryFromReader(message: QueryBatchConfirmsRequest, reader: jspb.BinaryReader): QueryBatchConfirmsRequest;
}

export namespace QueryBatchConfirmsRequest {
  export type AsObject = {
    nonce: number,
    contractAddress: string,
  }
}

export class QueryBatchConfirmsResponse extends jspb.Message {
  clearConfirmsList(): void;
  getConfirmsList(): Array<injective_peggy_v1_msgs_pb.MsgConfirmBatch>;
  setConfirmsList(value: Array<injective_peggy_v1_msgs_pb.MsgConfirmBatch>): void;
  addConfirms(value?: injective_peggy_v1_msgs_pb.MsgConfirmBatch, index?: number): injective_peggy_v1_msgs_pb.MsgConfirmBatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBatchConfirmsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBatchConfirmsResponse): QueryBatchConfirmsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBatchConfirmsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBatchConfirmsResponse;
  static deserializeBinaryFromReader(message: QueryBatchConfirmsResponse, reader: jspb.BinaryReader): QueryBatchConfirmsResponse;
}

export namespace QueryBatchConfirmsResponse {
  export type AsObject = {
    confirmsList: Array<injective_peggy_v1_msgs_pb.MsgConfirmBatch.AsObject>,
  }
}

export class QueryLastEventByAddrRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastEventByAddrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastEventByAddrRequest): QueryLastEventByAddrRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastEventByAddrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastEventByAddrRequest;
  static deserializeBinaryFromReader(message: QueryLastEventByAddrRequest, reader: jspb.BinaryReader): QueryLastEventByAddrRequest;
}

export namespace QueryLastEventByAddrRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueryLastEventByAddrResponse extends jspb.Message {
  hasLastClaimEvent(): boolean;
  clearLastClaimEvent(): void;
  getLastClaimEvent(): injective_peggy_v1_types_pb.LastClaimEvent | undefined;
  setLastClaimEvent(value?: injective_peggy_v1_types_pb.LastClaimEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLastEventByAddrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLastEventByAddrResponse): QueryLastEventByAddrResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLastEventByAddrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLastEventByAddrResponse;
  static deserializeBinaryFromReader(message: QueryLastEventByAddrResponse, reader: jspb.BinaryReader): QueryLastEventByAddrResponse;
}

export namespace QueryLastEventByAddrResponse {
  export type AsObject = {
    lastClaimEvent?: injective_peggy_v1_types_pb.LastClaimEvent.AsObject,
  }
}

export class QueryERC20ToDenomRequest extends jspb.Message {
  getErc20(): string;
  setErc20(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryERC20ToDenomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryERC20ToDenomRequest): QueryERC20ToDenomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryERC20ToDenomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryERC20ToDenomRequest;
  static deserializeBinaryFromReader(message: QueryERC20ToDenomRequest, reader: jspb.BinaryReader): QueryERC20ToDenomRequest;
}

export namespace QueryERC20ToDenomRequest {
  export type AsObject = {
    erc20: string,
  }
}

export class QueryERC20ToDenomResponse extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  getCosmosOriginated(): boolean;
  setCosmosOriginated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryERC20ToDenomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryERC20ToDenomResponse): QueryERC20ToDenomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryERC20ToDenomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryERC20ToDenomResponse;
  static deserializeBinaryFromReader(message: QueryERC20ToDenomResponse, reader: jspb.BinaryReader): QueryERC20ToDenomResponse;
}

export namespace QueryERC20ToDenomResponse {
  export type AsObject = {
    denom: string,
    cosmosOriginated: boolean,
  }
}

export class QueryDenomToERC20Request extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomToERC20Request.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomToERC20Request): QueryDenomToERC20Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomToERC20Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomToERC20Request;
  static deserializeBinaryFromReader(message: QueryDenomToERC20Request, reader: jspb.BinaryReader): QueryDenomToERC20Request;
}

export namespace QueryDenomToERC20Request {
  export type AsObject = {
    denom: string,
  }
}

export class QueryDenomToERC20Response extends jspb.Message {
  getErc20(): string;
  setErc20(value: string): void;

  getCosmosOriginated(): boolean;
  setCosmosOriginated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDenomToERC20Response.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDenomToERC20Response): QueryDenomToERC20Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDenomToERC20Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDenomToERC20Response;
  static deserializeBinaryFromReader(message: QueryDenomToERC20Response, reader: jspb.BinaryReader): QueryDenomToERC20Response;
}

export namespace QueryDenomToERC20Response {
  export type AsObject = {
    erc20: string,
    cosmosOriginated: boolean,
  }
}

export class QueryDelegateKeysByValidatorAddress extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegateKeysByValidatorAddress.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDelegateKeysByValidatorAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByValidatorAddress;
  static deserializeBinaryFromReader(message: QueryDelegateKeysByValidatorAddress, reader: jspb.BinaryReader): QueryDelegateKeysByValidatorAddress;
}

export namespace QueryDelegateKeysByValidatorAddress {
  export type AsObject = {
    validatorAddress: string,
  }
}

export class QueryDelegateKeysByValidatorAddressResponse extends jspb.Message {
  getEthAddress(): string;
  setEthAddress(value: string): void;

  getOrchestratorAddress(): string;
  setOrchestratorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegateKeysByValidatorAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDelegateKeysByValidatorAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByValidatorAddressResponse;
  static deserializeBinaryFromReader(message: QueryDelegateKeysByValidatorAddressResponse, reader: jspb.BinaryReader): QueryDelegateKeysByValidatorAddressResponse;
}

export namespace QueryDelegateKeysByValidatorAddressResponse {
  export type AsObject = {
    ethAddress: string,
    orchestratorAddress: string,
  }
}

export class QueryDelegateKeysByEthAddress extends jspb.Message {
  getEthAddress(): string;
  setEthAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegateKeysByEthAddress.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDelegateKeysByEthAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByEthAddress;
  static deserializeBinaryFromReader(message: QueryDelegateKeysByEthAddress, reader: jspb.BinaryReader): QueryDelegateKeysByEthAddress;
}

export namespace QueryDelegateKeysByEthAddress {
  export type AsObject = {
    ethAddress: string,
  }
}

export class QueryDelegateKeysByEthAddressResponse extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  getOrchestratorAddress(): string;
  setOrchestratorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegateKeysByEthAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDelegateKeysByEthAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByEthAddressResponse;
  static deserializeBinaryFromReader(message: QueryDelegateKeysByEthAddressResponse, reader: jspb.BinaryReader): QueryDelegateKeysByEthAddressResponse;
}

export namespace QueryDelegateKeysByEthAddressResponse {
  export type AsObject = {
    validatorAddress: string,
    orchestratorAddress: string,
  }
}

export class QueryDelegateKeysByOrchestratorAddress extends jspb.Message {
  getOrchestratorAddress(): string;
  setOrchestratorAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegateKeysByOrchestratorAddress.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDelegateKeysByOrchestratorAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByOrchestratorAddress;
  static deserializeBinaryFromReader(message: QueryDelegateKeysByOrchestratorAddress, reader: jspb.BinaryReader): QueryDelegateKeysByOrchestratorAddress;
}

export namespace QueryDelegateKeysByOrchestratorAddress {
  export type AsObject = {
    orchestratorAddress: string,
  }
}

export class QueryDelegateKeysByOrchestratorAddressResponse extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): void;

  getEthAddress(): string;
  setEthAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDelegateKeysByOrchestratorAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDelegateKeysByOrchestratorAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDelegateKeysByOrchestratorAddressResponse;
  static deserializeBinaryFromReader(message: QueryDelegateKeysByOrchestratorAddressResponse, reader: jspb.BinaryReader): QueryDelegateKeysByOrchestratorAddressResponse;
}

export namespace QueryDelegateKeysByOrchestratorAddressResponse {
  export type AsObject = {
    validatorAddress: string,
    ethAddress: string,
  }
}

export class QueryPendingSendToEth extends jspb.Message {
  getSenderAddress(): string;
  setSenderAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingSendToEth.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingSendToEth): QueryPendingSendToEth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingSendToEth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingSendToEth;
  static deserializeBinaryFromReader(message: QueryPendingSendToEth, reader: jspb.BinaryReader): QueryPendingSendToEth;
}

export namespace QueryPendingSendToEth {
  export type AsObject = {
    senderAddress: string,
  }
}

export class QueryPendingSendToEthResponse extends jspb.Message {
  clearTransfersInBatchesList(): void;
  getTransfersInBatchesList(): Array<injective_peggy_v1_batch_pb.OutgoingTransferTx>;
  setTransfersInBatchesList(value: Array<injective_peggy_v1_batch_pb.OutgoingTransferTx>): void;
  addTransfersInBatches(value?: injective_peggy_v1_batch_pb.OutgoingTransferTx, index?: number): injective_peggy_v1_batch_pb.OutgoingTransferTx;

  clearUnbatchedTransfersList(): void;
  getUnbatchedTransfersList(): Array<injective_peggy_v1_batch_pb.OutgoingTransferTx>;
  setUnbatchedTransfersList(value: Array<injective_peggy_v1_batch_pb.OutgoingTransferTx>): void;
  addUnbatchedTransfers(value?: injective_peggy_v1_batch_pb.OutgoingTransferTx, index?: number): injective_peggy_v1_batch_pb.OutgoingTransferTx;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPendingSendToEthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPendingSendToEthResponse): QueryPendingSendToEthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPendingSendToEthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPendingSendToEthResponse;
  static deserializeBinaryFromReader(message: QueryPendingSendToEthResponse, reader: jspb.BinaryReader): QueryPendingSendToEthResponse;
}

export namespace QueryPendingSendToEthResponse {
  export type AsObject = {
    transfersInBatchesList: Array<injective_peggy_v1_batch_pb.OutgoingTransferTx.AsObject>,
    unbatchedTransfersList: Array<injective_peggy_v1_batch_pb.OutgoingTransferTx.AsObject>,
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
  getState(): injective_peggy_v1_genesis_pb.GenesisState | undefined;
  setState(value?: injective_peggy_v1_genesis_pb.GenesisState): void;

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
    state?: injective_peggy_v1_genesis_pb.GenesisState.AsObject,
  }
}

