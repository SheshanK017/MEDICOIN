// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/query.proto

var injective_auction_v1beta1_query_pb = require("../../../injective/auction/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "injective.auction.v1beta1.Query";
  return Query;
}());

Query.AuctionParams = {
  methodName: "AuctionParams",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_auction_v1beta1_query_pb.QueryAuctionParamsRequest,
  responseType: injective_auction_v1beta1_query_pb.QueryAuctionParamsResponse
};

Query.CurrentAuctionBasket = {
  methodName: "CurrentAuctionBasket",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketRequest,
  responseType: injective_auction_v1beta1_query_pb.QueryCurrentAuctionBasketResponse
};

Query.AuctionModuleState = {
  methodName: "AuctionModuleState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_auction_v1beta1_query_pb.QueryModuleStateRequest,
  responseType: injective_auction_v1beta1_query_pb.QueryModuleStateResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.auctionParams = function auctionParams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AuctionParams, {
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

QueryClient.prototype.currentAuctionBasket = function currentAuctionBasket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.CurrentAuctionBasket, {
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

QueryClient.prototype.auctionModuleState = function auctionModuleState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.AuctionModuleState, {
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

exports.QueryClient = QueryClient;

