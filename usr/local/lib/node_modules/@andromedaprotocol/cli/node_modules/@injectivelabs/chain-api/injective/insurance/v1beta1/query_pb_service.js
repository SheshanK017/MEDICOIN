// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/query.proto

var injective_insurance_v1beta1_query_pb = require("../../../injective/insurance/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "injective.insurance.v1beta1.Query";
  return Query;
}());

Query.InsuranceParams = {
  methodName: "InsuranceParams",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_query_pb.QueryInsuranceParamsRequest,
  responseType: injective_insurance_v1beta1_query_pb.QueryInsuranceParamsResponse
};

Query.InsuranceFund = {
  methodName: "InsuranceFund",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_query_pb.QueryInsuranceFundRequest,
  responseType: injective_insurance_v1beta1_query_pb.QueryInsuranceFundResponse
};

Query.InsuranceFunds = {
  methodName: "InsuranceFunds",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_query_pb.QueryInsuranceFundsRequest,
  responseType: injective_insurance_v1beta1_query_pb.QueryInsuranceFundsResponse
};

Query.EstimatedRedemptions = {
  methodName: "EstimatedRedemptions",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsRequest,
  responseType: injective_insurance_v1beta1_query_pb.QueryEstimatedRedemptionsResponse
};

Query.PendingRedemptions = {
  methodName: "PendingRedemptions",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsRequest,
  responseType: injective_insurance_v1beta1_query_pb.QueryPendingRedemptionsResponse
};

Query.InsuranceModuleState = {
  methodName: "InsuranceModuleState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_insurance_v1beta1_query_pb.QueryModuleStateRequest,
  responseType: injective_insurance_v1beta1_query_pb.QueryModuleStateResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.insuranceParams = function insuranceParams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.InsuranceParams, {
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

QueryClient.prototype.insuranceFund = function insuranceFund(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.InsuranceFund, {
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

QueryClient.prototype.insuranceFunds = function insuranceFunds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.InsuranceFunds, {
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

QueryClient.prototype.estimatedRedemptions = function estimatedRedemptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.EstimatedRedemptions, {
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

QueryClient.prototype.pendingRedemptions = function pendingRedemptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PendingRedemptions, {
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

QueryClient.prototype.insuranceModuleState = function insuranceModuleState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.InsuranceModuleState, {
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

