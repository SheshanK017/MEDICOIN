// package: injective.peggy.v1
// file: injective/peggy/v1/query.proto

import * as injective_peggy_v1_query_pb from "../../../injective/peggy/v1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryParamsRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryParamsResponse;
};

type QueryCurrentValset = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryCurrentValsetRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryCurrentValsetResponse;
};

type QueryValsetRequest = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryValsetRequestRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryValsetRequestResponse;
};

type QueryValsetConfirm = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryValsetConfirmRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryValsetConfirmResponse;
};

type QueryValsetConfirmsByNonce = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceResponse;
};

type QueryLastValsetRequests = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryLastValsetRequestsRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryLastValsetRequestsResponse;
};

type QueryLastPendingValsetRequestByAddr = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrResponse;
};

type QueryLastEventByAddr = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryLastEventByAddrRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryLastEventByAddrResponse;
};

type QueryGetPendingSendToEth = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryPendingSendToEth;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryPendingSendToEthResponse;
};

type QueryBatchFees = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryBatchFeeRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryBatchFeeResponse;
};

type QueryOutgoingTxBatches = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryOutgoingTxBatchesRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryOutgoingTxBatchesResponse;
};

type QueryLastPendingBatchRequestByAddr = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrResponse;
};

type QueryBatchRequestByNonce = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryBatchRequestByNonceRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryBatchRequestByNonceResponse;
};

type QueryBatchConfirms = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryBatchConfirmsRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryBatchConfirmsResponse;
};

type QueryERC20ToDenom = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryERC20ToDenomRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryERC20ToDenomResponse;
};

type QueryDenomToERC20 = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryDenomToERC20Request;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryDenomToERC20Response;
};

type QueryGetDelegateKeyByValidator = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddress;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddressResponse;
};

type QueryGetDelegateKeyByEth = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddress;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddressResponse;
};

type QueryGetDelegateKeyByOrchestrator = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddress;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddressResponse;
};

type QueryPeggyModuleState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_query_pb.QueryModuleStateRequest;
  readonly responseType: typeof injective_peggy_v1_query_pb.QueryModuleStateResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Params: QueryParams;
  static readonly CurrentValset: QueryCurrentValset;
  static readonly ValsetRequest: QueryValsetRequest;
  static readonly ValsetConfirm: QueryValsetConfirm;
  static readonly ValsetConfirmsByNonce: QueryValsetConfirmsByNonce;
  static readonly LastValsetRequests: QueryLastValsetRequests;
  static readonly LastPendingValsetRequestByAddr: QueryLastPendingValsetRequestByAddr;
  static readonly LastEventByAddr: QueryLastEventByAddr;
  static readonly GetPendingSendToEth: QueryGetPendingSendToEth;
  static readonly BatchFees: QueryBatchFees;
  static readonly OutgoingTxBatches: QueryOutgoingTxBatches;
  static readonly LastPendingBatchRequestByAddr: QueryLastPendingBatchRequestByAddr;
  static readonly BatchRequestByNonce: QueryBatchRequestByNonce;
  static readonly BatchConfirms: QueryBatchConfirms;
  static readonly ERC20ToDenom: QueryERC20ToDenom;
  static readonly DenomToERC20: QueryDenomToERC20;
  static readonly GetDelegateKeyByValidator: QueryGetDelegateKeyByValidator;
  static readonly GetDelegateKeyByEth: QueryGetDelegateKeyByEth;
  static readonly GetDelegateKeyByOrchestrator: QueryGetDelegateKeyByOrchestrator;
  static readonly PeggyModuleState: QueryPeggyModuleState;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class QueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  params(
    requestMessage: injective_peggy_v1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: injective_peggy_v1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  currentValset(
    requestMessage: injective_peggy_v1_query_pb.QueryCurrentValsetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryCurrentValsetResponse|null) => void
  ): UnaryResponse;
  currentValset(
    requestMessage: injective_peggy_v1_query_pb.QueryCurrentValsetRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryCurrentValsetResponse|null) => void
  ): UnaryResponse;
  valsetRequest(
    requestMessage: injective_peggy_v1_query_pb.QueryValsetRequestRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryValsetRequestResponse|null) => void
  ): UnaryResponse;
  valsetRequest(
    requestMessage: injective_peggy_v1_query_pb.QueryValsetRequestRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryValsetRequestResponse|null) => void
  ): UnaryResponse;
  valsetConfirm(
    requestMessage: injective_peggy_v1_query_pb.QueryValsetConfirmRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryValsetConfirmResponse|null) => void
  ): UnaryResponse;
  valsetConfirm(
    requestMessage: injective_peggy_v1_query_pb.QueryValsetConfirmRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryValsetConfirmResponse|null) => void
  ): UnaryResponse;
  valsetConfirmsByNonce(
    requestMessage: injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceResponse|null) => void
  ): UnaryResponse;
  valsetConfirmsByNonce(
    requestMessage: injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceResponse|null) => void
  ): UnaryResponse;
  lastValsetRequests(
    requestMessage: injective_peggy_v1_query_pb.QueryLastValsetRequestsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastValsetRequestsResponse|null) => void
  ): UnaryResponse;
  lastValsetRequests(
    requestMessage: injective_peggy_v1_query_pb.QueryLastValsetRequestsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastValsetRequestsResponse|null) => void
  ): UnaryResponse;
  lastPendingValsetRequestByAddr(
    requestMessage: injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrResponse|null) => void
  ): UnaryResponse;
  lastPendingValsetRequestByAddr(
    requestMessage: injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrResponse|null) => void
  ): UnaryResponse;
  lastEventByAddr(
    requestMessage: injective_peggy_v1_query_pb.QueryLastEventByAddrRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastEventByAddrResponse|null) => void
  ): UnaryResponse;
  lastEventByAddr(
    requestMessage: injective_peggy_v1_query_pb.QueryLastEventByAddrRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastEventByAddrResponse|null) => void
  ): UnaryResponse;
  getPendingSendToEth(
    requestMessage: injective_peggy_v1_query_pb.QueryPendingSendToEth,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryPendingSendToEthResponse|null) => void
  ): UnaryResponse;
  getPendingSendToEth(
    requestMessage: injective_peggy_v1_query_pb.QueryPendingSendToEth,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryPendingSendToEthResponse|null) => void
  ): UnaryResponse;
  batchFees(
    requestMessage: injective_peggy_v1_query_pb.QueryBatchFeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryBatchFeeResponse|null) => void
  ): UnaryResponse;
  batchFees(
    requestMessage: injective_peggy_v1_query_pb.QueryBatchFeeRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryBatchFeeResponse|null) => void
  ): UnaryResponse;
  outgoingTxBatches(
    requestMessage: injective_peggy_v1_query_pb.QueryOutgoingTxBatchesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryOutgoingTxBatchesResponse|null) => void
  ): UnaryResponse;
  outgoingTxBatches(
    requestMessage: injective_peggy_v1_query_pb.QueryOutgoingTxBatchesRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryOutgoingTxBatchesResponse|null) => void
  ): UnaryResponse;
  lastPendingBatchRequestByAddr(
    requestMessage: injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrResponse|null) => void
  ): UnaryResponse;
  lastPendingBatchRequestByAddr(
    requestMessage: injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrResponse|null) => void
  ): UnaryResponse;
  batchRequestByNonce(
    requestMessage: injective_peggy_v1_query_pb.QueryBatchRequestByNonceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryBatchRequestByNonceResponse|null) => void
  ): UnaryResponse;
  batchRequestByNonce(
    requestMessage: injective_peggy_v1_query_pb.QueryBatchRequestByNonceRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryBatchRequestByNonceResponse|null) => void
  ): UnaryResponse;
  batchConfirms(
    requestMessage: injective_peggy_v1_query_pb.QueryBatchConfirmsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryBatchConfirmsResponse|null) => void
  ): UnaryResponse;
  batchConfirms(
    requestMessage: injective_peggy_v1_query_pb.QueryBatchConfirmsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryBatchConfirmsResponse|null) => void
  ): UnaryResponse;
  eRC20ToDenom(
    requestMessage: injective_peggy_v1_query_pb.QueryERC20ToDenomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryERC20ToDenomResponse|null) => void
  ): UnaryResponse;
  eRC20ToDenom(
    requestMessage: injective_peggy_v1_query_pb.QueryERC20ToDenomRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryERC20ToDenomResponse|null) => void
  ): UnaryResponse;
  denomToERC20(
    requestMessage: injective_peggy_v1_query_pb.QueryDenomToERC20Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDenomToERC20Response|null) => void
  ): UnaryResponse;
  denomToERC20(
    requestMessage: injective_peggy_v1_query_pb.QueryDenomToERC20Request,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDenomToERC20Response|null) => void
  ): UnaryResponse;
  getDelegateKeyByValidator(
    requestMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddress,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddressResponse|null) => void
  ): UnaryResponse;
  getDelegateKeyByValidator(
    requestMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddress,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddressResponse|null) => void
  ): UnaryResponse;
  getDelegateKeyByEth(
    requestMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddress,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddressResponse|null) => void
  ): UnaryResponse;
  getDelegateKeyByEth(
    requestMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddress,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddressResponse|null) => void
  ): UnaryResponse;
  getDelegateKeyByOrchestrator(
    requestMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddress,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddressResponse|null) => void
  ): UnaryResponse;
  getDelegateKeyByOrchestrator(
    requestMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddress,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddressResponse|null) => void
  ): UnaryResponse;
  peggyModuleState(
    requestMessage: injective_peggy_v1_query_pb.QueryModuleStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
  peggyModuleState(
    requestMessage: injective_peggy_v1_query_pb.QueryModuleStateRequest,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
}

