// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/query.proto

import * as injective_insurance_v1beta1_query_pb from "../../../injective/insurance/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryInsuranceParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_query_pb.QueryInsuranceParamsRequest;
  readonly responseType: typeof injective_insurance_v1beta1_query_pb.QueryInsuranceParamsResponse;
};

type QueryInsuranceFund = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_query_pb.QueryInsuranceFundRequest;
  readonly responseType: typeof injective_insurance_v1beta1_query_pb.QueryInsuranceFundResponse;
};

type QueryInsuranceFunds = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_query_pb.QueryInsuranceFundsRequest;
  readonly responseType: typeof injective_insurance_v1beta1_query_pb.QueryInsuranceFundsResponse;
};

type QueryEstimatedRedemptions = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsRequest;
  readonly responseType: typeof injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsResponse;
};

type QueryPendingRedemptions = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsRequest;
  readonly responseType: typeof injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsResponse;
};

type QueryInsuranceModuleState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_query_pb.QueryModuleStateRequest;
  readonly responseType: typeof injective_insurance_v1beta1_query_pb.QueryModuleStateResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly InsuranceParams: QueryInsuranceParams;
  static readonly InsuranceFund: QueryInsuranceFund;
  static readonly InsuranceFunds: QueryInsuranceFunds;
  static readonly EstimatedRedemptions: QueryEstimatedRedemptions;
  static readonly PendingRedemptions: QueryPendingRedemptions;
  static readonly InsuranceModuleState: QueryInsuranceModuleState;
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
  insuranceParams(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceParamsResponse|null) => void
  ): UnaryResponse;
  insuranceParams(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceParamsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceParamsResponse|null) => void
  ): UnaryResponse;
  insuranceFund(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundResponse|null) => void
  ): UnaryResponse;
  insuranceFund(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundRequest,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundResponse|null) => void
  ): UnaryResponse;
  insuranceFunds(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundsResponse|null) => void
  ): UnaryResponse;
  insuranceFunds(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryInsuranceFundsResponse|null) => void
  ): UnaryResponse;
  estimatedRedemptions(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsResponse|null) => void
  ): UnaryResponse;
  estimatedRedemptions(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsResponse|null) => void
  ): UnaryResponse;
  pendingRedemptions(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsResponse|null) => void
  ): UnaryResponse;
  pendingRedemptions(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsResponse|null) => void
  ): UnaryResponse;
  insuranceModuleState(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryModuleStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
  insuranceModuleState(
    requestMessage: injective_insurance_v1beta1_query_pb.QueryModuleStateRequest,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
}

