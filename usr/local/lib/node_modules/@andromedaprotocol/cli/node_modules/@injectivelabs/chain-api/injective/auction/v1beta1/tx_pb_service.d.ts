// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/tx.proto

import * as injective_auction_v1beta1_tx_pb from "../../../injective/auction/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgBid = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_auction_v1beta1_tx_pb.MsgBid;
  readonly responseType: typeof injective_auction_v1beta1_tx_pb.MsgBidResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly Bid: MsgBid;
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
  bid(
    requestMessage: injective_auction_v1beta1_tx_pb.MsgBid,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_tx_pb.MsgBidResponse|null) => void
  ): UnaryResponse;
  bid(
    requestMessage: injective_auction_v1beta1_tx_pb.MsgBid,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_tx_pb.MsgBidResponse|null) => void
  ): UnaryResponse;
}

