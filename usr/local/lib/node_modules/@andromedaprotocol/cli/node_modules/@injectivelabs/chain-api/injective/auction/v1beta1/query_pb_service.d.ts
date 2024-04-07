// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/query.proto

import * as injective_auction_v1beta1_query_pb from "../../../injective/auction/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryAuctionParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_auction_v1beta1_query_pb.QueryAuctionParamsRequest;
  readonly responseType: typeof injective_auction_v1beta1_query_pb.QueryAuctionParamsResponse;
};

type QueryCurrentAuctionBasket = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketRequest;
  readonly responseType: typeof injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketResponse;
};

type QueryAuctionModuleState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_auction_v1beta1_query_pb.QueryModuleStateRequest;
  readonly responseType: typeof injective_auction_v1beta1_query_pb.QueryModuleStateResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly AuctionParams: QueryAuctionParams;
  static readonly CurrentAuctionBasket: QueryCurrentAuctionBasket;
  static readonly AuctionModuleState: QueryAuctionModuleState;
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
  auctionParams(
    requestMessage: injective_auction_v1beta1_query_pb.QueryAuctionParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_query_pb.QueryAuctionParamsResponse|null) => void
  ): UnaryResponse;
  auctionParams(
    requestMessage: injective_auction_v1beta1_query_pb.QueryAuctionParamsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_query_pb.QueryAuctionParamsResponse|null) => void
  ): UnaryResponse;
  currentAuctionBasket(
    requestMessage: injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketResponse|null) => void
  ): UnaryResponse;
  currentAuctionBasket(
    requestMessage: injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketRequest,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketResponse|null) => void
  ): UnaryResponse;
  auctionModuleState(
    requestMessage: injective_auction_v1beta1_query_pb.QueryModuleStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
  auctionModuleState(
    requestMessage: injective_auction_v1beta1_query_pb.QueryModuleStateRequest,
    callback: (error: ServiceError|null, responseMessage: injective_auction_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
}

