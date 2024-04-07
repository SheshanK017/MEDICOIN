// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as injective_insurance_v1beta1_insurance_pb from "../../../injective/insurance/v1beta1/insurance_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_insurance_v1beta1_insurance_pb.Params | undefined;
  setParams(value?: injective_insurance_v1beta1_insurance_pb.Params): void;

  clearInsuranceFundsList(): void;
  getInsuranceFundsList(): Array<injective_insurance_v1beta1_insurance_pb.InsuranceFund>;
  setInsuranceFundsList(value: Array<injective_insurance_v1beta1_insurance_pb.InsuranceFund>): void;
  addInsuranceFunds(value?: injective_insurance_v1beta1_insurance_pb.InsuranceFund, index?: number): injective_insurance_v1beta1_insurance_pb.InsuranceFund;

  clearRedemptionScheduleList(): void;
  getRedemptionScheduleList(): Array<injective_insurance_v1beta1_insurance_pb.RedemptionSchedule>;
  setRedemptionScheduleList(value: Array<injective_insurance_v1beta1_insurance_pb.RedemptionSchedule>): void;
  addRedemptionSchedule(value?: injective_insurance_v1beta1_insurance_pb.RedemptionSchedule, index?: number): injective_insurance_v1beta1_insurance_pb.RedemptionSchedule;

  getNextShareDenomId(): number;
  setNextShareDenomId(value: number): void;

  getNextRedemptionScheduleId(): number;
  setNextRedemptionScheduleId(value: number): void;

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
    params?: injective_insurance_v1beta1_insurance_pb.Params.AsObject,
    insuranceFundsList: Array<injective_insurance_v1beta1_insurance_pb.InsuranceFund.AsObject>,
    redemptionScheduleList: Array<injective_insurance_v1beta1_insurance_pb.RedemptionSchedule.AsObject>,
    nextShareDenomId: number,
    nextRedemptionScheduleId: number,
  }
}

