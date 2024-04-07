// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/tx.proto

var injective_auction_v1beta1_tx_pb = require("../../../injective/auction/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "injective.auction.v1beta1.Msg";
  return Msg;
}());

Msg.Bid = {
  methodName: "Bid",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_auction_v1beta1_tx_pb.MsgBid,
  responseType: injective_auction_v1beta1_tx_pb.MsgBidResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.bid = function bid(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Bid, {
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

