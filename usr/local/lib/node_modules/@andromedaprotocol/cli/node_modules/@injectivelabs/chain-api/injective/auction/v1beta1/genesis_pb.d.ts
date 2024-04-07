// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as injective_auction_v1beta1_auction_pb from "../../../injective/auction/v1beta1/auction_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_auction_v1beta1_auction_pb.Params | undefined;
  setParams(value?: injective_auction_v1beta1_auction_pb.Params): void;

  getAuctionRound(): number;
  setAuctionRound(value: number): void;

  hasHighestBid(): boolean;
  clearHighestBid(): void;
  getHighestBid(): injective_auction_v1beta1_auction_pb.Bid | undefined;
  setHighestBid(value?: injective_auction_v1beta1_auction_pb.Bid): void;

  getAuctionEndingTimestamp(): number;
  setAuctionEndingTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: injective_auction_v1beta1_auction_pb.Params.AsObject,
    auctionRound: number,
    highestBid?: injective_auction_v1beta1_auction_pb.Bid.AsObject,
    auctionEndingTimestamp: number,
  }
}

