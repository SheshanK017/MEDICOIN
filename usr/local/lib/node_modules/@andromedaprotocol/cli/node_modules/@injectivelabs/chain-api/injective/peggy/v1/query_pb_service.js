// package: injective.peggy.v1
// file: injective/peggy/v1/query.proto

var injective_peggy_v1_query_pb = require("../../../injective/peggy/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "injective.peggy.v1.Query";
  return Query;
}());

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryParamsRequest,
  responseType: injective_peggy_v1_query_pb.QueryParamsResponse
};

Query.CurrentValset = {
  methodName: "CurrentValset",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryCurrentValsetRequest,
  responseType: injective_peggy_v1_query_pb.QueryCurrentValsetResponse
};

Query.ValsetRequest = {
  methodName: "ValsetRequest",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryValsetRequestRequest,
  responseType: injective_peggy_v1_query_pb.QueryValsetRequestResponse
};

Query.ValsetConfirm = {
  methodName: "ValsetConfirm",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryValsetConfirmRequest,
  responseType: injective_peggy_v1_query_pb.QueryValsetConfirmResponse
};

Query.ValsetConfirmsByNonce = {
  methodName: "ValsetConfirmsByNonce",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceRequest,
  responseType: injective_peggy_v1_query_pb.QueryValsetConfirmsByNonceResponse
};

Query.LastValsetRequests = {
  methodName: "LastValsetRequests",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryLastValsetRequestsRequest,
  responseType: injective_peggy_v1_query_pb.QueryLastValsetRequestsResponse
};

Query.LastPendingValsetRequestByAddr = {
  methodName: "LastPendingValsetRequestByAddr",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrRequest,
  responseType: injective_peggy_v1_query_pb.QueryLastPendingValsetRequestByAddrResponse
};

Query.LastEventByAddr = {
  methodName: "LastEventByAddr",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryLastEventByAddrRequest,
  responseType: injective_peggy_v1_query_pb.QueryLastEventByAddrResponse
};

Query.GetPendingSendToEth = {
  methodName: "GetPendingSendToEth",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryPendingSendToEth,
  responseType: injective_peggy_v1_query_pb.QueryPendingSendToEthResponse
};

Query.BatchFees = {
  methodName: "BatchFees",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryBatchFeeRequest,
  responseType: injective_peggy_v1_query_pb.QueryBatchFeeResponse
};

Query.OutgoingTxBatches = {
  methodName: "OutgoingTxBatches",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryOutgoingTxBatchesRequest,
  responseType: injective_peggy_v1_query_pb.QueryOutgoingTxBatchesResponse
};

Query.LastPendingBatchRequestByAddr = {
  methodName: "LastPendingBatchRequestByAddr",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrRequest,
  responseType: injective_peggy_v1_query_pb.QueryLastPendingBatchRequestByAddrResponse
};

Query.BatchRequestByNonce = {
  methodName: "BatchRequestByNonce",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryBatchRequestByNonceRequest,
  responseType: injective_peggy_v1_query_pb.QueryBatchRequestByNonceResponse
};

Query.BatchConfirms = {
  methodName: "BatchConfirms",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryBatchConfirmsRequest,
  responseType: injective_peggy_v1_query_pb.QueryBatchConfirmsResponse
};

Query.ERC20ToDenom = {
  methodName: "ERC20ToDenom",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryERC20ToDenomRequest,
  responseType: injective_peggy_v1_query_pb.QueryERC20ToDenomResponse
};

Query.DenomToERC20 = {
  methodName: "DenomToERC20",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryDenomToERC20Request,
  responseType: injective_peggy_v1_query_pb.QueryDenomToERC20Response
};

Query.GetDelegateKeyByValidator = {
  methodName: "GetDelegateKeyByValidator",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddress,
  responseType: injective_peggy_v1_query_pb.QueryDelegateKeysByValidatorAddressResponse
};

Query.GetDelegateKeyByEth = {
  methodName: "GetDelegateKeyByEth",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddress,
  responseType: injective_peggy_v1_query_pb.QueryDelegateKeysByEthAddressResponse
};

Query.GetDelegateKeyByOrchestrator = {
  methodName: "GetDelegateKeyByOrchestrator",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddress,
  responseType: injective_peggy_v1_query_pb.QueryDelegateKeysByOrchestratorAddressResponse
};

Query.PeggyModuleState = {
  methodName: "PeggyModuleState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_query_pb.QueryModuleStateRequest,
  responseType: injective_peggy_v1_query_pb.QueryModuleStateResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.params = function params(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Params, {
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

QueryClient.prototype.currentValset = function currentValset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.CurrentValset, {
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

QueryClient.prototype.valsetRequest = function valsetRequest(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValsetRequest, {
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

QueryClient.prototype.valsetConfirm = function valsetConfirm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValsetConfirm, {
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

QueryClient.prototype.valsetConfirmsByNonce = function valsetConfirmsByNonce(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ValsetConfirmsByNonce, {
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

QueryClient.prototype.lastValsetRequests = function lastValsetRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.LastValsetRequests, {
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

QueryClient.prototype.lastPendingValsetRequestByAddr = function lastPendingValsetRequestByAddr(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.LastPendingValsetRequestByAddr, {
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

QueryClient.prototype.lastEventByAddr = function lastEventByAddr(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.LastEventByAddr, {
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

QueryClient.prototype.getPendingSendToEth = function getPendingSendToEth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GetPendingSendToEth, {
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

QueryClient.prototype.batchFees = function batchFees(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.BatchFees, {
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

QueryClient.prototype.outgoingTxBatches = function outgoingTxBatches(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.OutgoingTxBatches, {
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

QueryClient.prototype.lastPendingBatchRequestByAddr = function lastPendingBatchRequestByAddr(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.LastPendingBatchRequestByAddr, {
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

QueryClient.prototype.batchRequestByNonce = function batchRequestByNonce(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.BatchRequestByNonce, {
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

QueryClient.prototype.batchConfirms = function batchConfirms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.BatchConfirms, {
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

QueryClient.prototype.eRC20ToDenom = function eRC20ToDenom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ERC20ToDenom, {
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

QueryClient.prototype.denomToERC20 = function denomToERC20(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DenomToERC20, {
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

QueryClient.prototype.getDelegateKeyByValidator = function getDelegateKeyByValidator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GetDelegateKeyByValidator, {
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

QueryClient.prototype.getDelegateKeyByEth = function getDelegateKeyByEth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GetDelegateKeyByEth, {
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

QueryClient.prototype.getDelegateKeyByOrchestrator = function getDelegateKeyByOrchestrator(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.GetDelegateKeyByOrchestrator, {
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

QueryClient.prototype.peggyModuleState = function peggyModuleState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PeggyModuleState, {
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

