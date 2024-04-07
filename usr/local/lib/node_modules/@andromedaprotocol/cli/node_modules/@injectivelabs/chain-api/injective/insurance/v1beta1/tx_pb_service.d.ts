// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/tx.proto

import * as injective_insurance_v1beta1_tx_pb from "../../../injective/insurance/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgCreateInsuranceFund = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFund;
  readonly responseType: typeof injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFundResponse;
};

type MsgUnderwrite = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_tx_pb.MsgUnderwrite;
  readonly responseType: typeof injective_insurance_v1beta1_tx_pb.MsgUnderwriteResponse;
};

type MsgRequestRedemption = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_insurance_v1beta1_tx_pb.MsgRequestRedemption;
  readonly responseType: typeof injective_insurance_v1beta1_tx_pb.MsgRequestRedemptionResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly CreateInsuranceFund: MsgCreateInsuranceFund;
  static readonly Underwrite: MsgUnderwrite;
  static readonly RequestRedemption: MsgRequestRedemption;
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

export class MsgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createInsuranceFund(
    requestMessage: injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFund,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFundResponse|null) => void
  ): UnaryResponse;
  createInsuranceFund(
    requestMessage: injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFund,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFundResponse|null) => void
  ): UnaryResponse;
  underwrite(
    requestMessage: injective_insurance_v1beta1_tx_pb.MsgUnderwrite,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_tx_pb.MsgUnderwriteResponse|null) => void
  ): UnaryResponse;
  underwrite(
    requestMessage: injective_insurance_v1beta1_tx_pb.MsgUnderwrite,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_tx_pb.MsgUnderwriteResponse|null) => void
  ): UnaryResponse;
  requestRedemption(
    requestMessage: injective_insurance_v1beta1_tx_pb.MsgRequestRedemption,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_tx_pb.MsgRequestRedemptionResponse|null) => void
  ): UnaryResponse;
  requestRedemption(
    requestMessage: injective_insurance_v1beta1_tx_pb.MsgRequestRedemption,
    callback: (error: ServiceError|null, responseMessage: injective_insurance_v1beta1_tx_pb.MsgRequestRedemptionResponse|null) => void
  ): UnaryResponse;
}

