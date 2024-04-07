// package: injective.peggy.v1
// file: injective/peggy/v1/msgs.proto

import * as injective_peggy_v1_msgs_pb from "../../../injective/peggy/v1/msgs_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgValsetConfirm = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgValsetConfirm;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgValsetConfirmResponse;
};

type MsgSendToEth = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgSendToEth;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgSendToEthResponse;
};

type MsgRequestBatch = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgRequestBatch;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgRequestBatchResponse;
};

type MsgConfirmBatch = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgConfirmBatch;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgConfirmBatchResponse;
};

type MsgDepositClaim = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgDepositClaim;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgDepositClaimResponse;
};

type MsgWithdrawClaim = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgWithdrawClaim;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgWithdrawClaimResponse;
};

type MsgValsetUpdateClaim = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaim;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaimResponse;
};

type MsgERC20DeployedClaim = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgERC20DeployedClaim;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgERC20DeployedClaimResponse;
};

type MsgSetOrchestratorAddresses = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddressesResponse;
};

type MsgCancelSendToEth = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgCancelSendToEth;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgCancelSendToEthResponse;
};

type MsgSubmitBadSignatureEvidence = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidence;
  readonly responseType: typeof injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidenceResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly ValsetConfirm: MsgValsetConfirm;
  static readonly SendToEth: MsgSendToEth;
  static readonly RequestBatch: MsgRequestBatch;
  static readonly ConfirmBatch: MsgConfirmBatch;
  static readonly DepositClaim: MsgDepositClaim;
  static readonly WithdrawClaim: MsgWithdrawClaim;
  static readonly ValsetUpdateClaim: MsgValsetUpdateClaim;
  static readonly ERC20DeployedClaim: MsgERC20DeployedClaim;
  static readonly SetOrchestratorAddresses: MsgSetOrchestratorAddresses;
  static readonly CancelSendToEth: MsgCancelSendToEth;
  static readonly SubmitBadSignatureEvidence: MsgSubmitBadSignatureEvidence;
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
  valsetConfirm(
    requestMessage: injective_peggy_v1_msgs_pb.MsgValsetConfirm,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgValsetConfirmResponse|null) => void
  ): UnaryResponse;
  valsetConfirm(
    requestMessage: injective_peggy_v1_msgs_pb.MsgValsetConfirm,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgValsetConfirmResponse|null) => void
  ): UnaryResponse;
  sendToEth(
    requestMessage: injective_peggy_v1_msgs_pb.MsgSendToEth,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgSendToEthResponse|null) => void
  ): UnaryResponse;
  sendToEth(
    requestMessage: injective_peggy_v1_msgs_pb.MsgSendToEth,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgSendToEthResponse|null) => void
  ): UnaryResponse;
  requestBatch(
    requestMessage: injective_peggy_v1_msgs_pb.MsgRequestBatch,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgRequestBatchResponse|null) => void
  ): UnaryResponse;
  requestBatch(
    requestMessage: injective_peggy_v1_msgs_pb.MsgRequestBatch,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgRequestBatchResponse|null) => void
  ): UnaryResponse;
  confirmBatch(
    requestMessage: injective_peggy_v1_msgs_pb.MsgConfirmBatch,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgConfirmBatchResponse|null) => void
  ): UnaryResponse;
  confirmBatch(
    requestMessage: injective_peggy_v1_msgs_pb.MsgConfirmBatch,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgConfirmBatchResponse|null) => void
  ): UnaryResponse;
  depositClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgDepositClaim,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgDepositClaimResponse|null) => void
  ): UnaryResponse;
  depositClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgDepositClaim,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgDepositClaimResponse|null) => void
  ): UnaryResponse;
  withdrawClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgWithdrawClaim,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgWithdrawClaimResponse|null) => void
  ): UnaryResponse;
  withdrawClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgWithdrawClaim,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgWithdrawClaimResponse|null) => void
  ): UnaryResponse;
  valsetUpdateClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaim,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaimResponse|null) => void
  ): UnaryResponse;
  valsetUpdateClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaim,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaimResponse|null) => void
  ): UnaryResponse;
  eRC20DeployedClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgERC20DeployedClaim,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgERC20DeployedClaimResponse|null) => void
  ): UnaryResponse;
  eRC20DeployedClaim(
    requestMessage: injective_peggy_v1_msgs_pb.MsgERC20DeployedClaim,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgERC20DeployedClaimResponse|null) => void
  ): UnaryResponse;
  setOrchestratorAddresses(
    requestMessage: injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddressesResponse|null) => void
  ): UnaryResponse;
  setOrchestratorAddresses(
    requestMessage: injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddressesResponse|null) => void
  ): UnaryResponse;
  cancelSendToEth(
    requestMessage: injective_peggy_v1_msgs_pb.MsgCancelSendToEth,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgCancelSendToEthResponse|null) => void
  ): UnaryResponse;
  cancelSendToEth(
    requestMessage: injective_peggy_v1_msgs_pb.MsgCancelSendToEth,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgCancelSendToEthResponse|null) => void
  ): UnaryResponse;
  submitBadSignatureEvidence(
    requestMessage: injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidence,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidenceResponse|null) => void
  ): UnaryResponse;
  submitBadSignatureEvidence(
    requestMessage: injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidence,
    callback: (error: ServiceError|null, responseMessage: injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidenceResponse|null) => void
  ): UnaryResponse;
}

