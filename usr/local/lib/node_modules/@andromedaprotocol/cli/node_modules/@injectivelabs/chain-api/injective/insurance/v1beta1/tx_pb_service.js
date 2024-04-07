// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/tx.proto

var injective_insurance_v1beta1_tx_pb = require("../../../injective/insurance/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "injective.insurance.v1beta1.Msg";
  return Msg;
}());

Msg.CreateInsuranceFund = {
  methodName: "CreateInsuranceFund",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFund,
  responseType: injective_insurance_v1beta1_tx_pb.MsgCreateInsuranceFundResponse
};

Msg.Underwrite = {
  methodName: "Underwrite",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_tx_pb.MsgUnderwrite,
  responseType: injective_insurance_v1beta1_tx_pb.MsgUnderwriteResponse
};

Msg.RequestRedemption = {
  methodName: "RequestRedemption",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_tx_pb.MsgRequestRedemption,
  responseType: injective_insurance_v1beta1_tx_pb.MsgRequestRedemptionResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.createInsuranceFund = function createInsuranceFund(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateInsuranceFund, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MsgClient.prototype.underwrite = function underwrite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Underwrite, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MsgClient.prototype.requestRedemption = function requestRedemption(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RequestRedemption, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MsgClient = MsgClient;

