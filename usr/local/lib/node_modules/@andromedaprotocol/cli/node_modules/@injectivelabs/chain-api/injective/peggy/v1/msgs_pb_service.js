// package: injective.peggy.v1
// file: injective/peggy/v1/msgs.proto

var injective_peggy_v1_msgs_pb = require("../../../injective/peggy/v1/msgs_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "injective.peggy.v1.Msg";
  return Msg;
}());

Msg.ValsetConfirm = {
  methodName: "ValsetConfirm",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgValsetConfirm,
  responseType: injective_peggy_v1_msgs_pb.MsgValsetConfirmResponse
};

Msg.SendToEth = {
  methodName: "SendToEth",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgSendToEth,
  responseType: injective_peggy_v1_msgs_pb.MsgSendToEthResponse
};

Msg.RequestBatch = {
  methodName: "RequestBatch",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgRequestBatch,
  responseType: injective_peggy_v1_msgs_pb.MsgRequestBatchResponse
};

Msg.ConfirmBatch = {
  methodName: "ConfirmBatch",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgConfirmBatch,
  responseType: injective_peggy_v1_msgs_pb.MsgConfirmBatchResponse
};

Msg.DepositClaim = {
  methodName: "DepositClaim",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgDepositClaim,
  responseType: injective_peggy_v1_msgs_pb.MsgDepositClaimResponse
};

Msg.WithdrawClaim = {
  methodName: "WithdrawClaim",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgWithdrawClaim,
  responseType: injective_peggy_v1_msgs_pb.MsgWithdrawClaimResponse
};

Msg.ValsetUpdateClaim = {
  methodName: "ValsetUpdateClaim",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaim,
  responseType: injective_peggy_v1_msgs_pb.MsgValsetUpdatedClaimResponse
};

Msg.ERC20DeployedClaim = {
  methodName: "ERC20DeployedClaim",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgERC20DeployedClaim,
  responseType: injective_peggy_v1_msgs_pb.MsgERC20DeployedClaimResponse
};

Msg.SetOrchestratorAddresses = {
  methodName: "SetOrchestratorAddresses",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses,
  responseType: injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddressesResponse
};

Msg.CancelSendToEth = {
  methodName: "CancelSendToEth",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgCancelSendToEth,
  responseType: injective_peggy_v1_msgs_pb.MsgCancelSendToEthResponse
};

Msg.SubmitBadSignatureEvidence = {
  methodName: "SubmitBadSignatureEvidence",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidence,
  responseType: injective_peggy_v1_msgs_pb.MsgSubmitBadSignatureEvidenceResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.valsetConfirm = function valsetConfirm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ValsetConfirm, {
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

MsgClient.prototype.sendToEth = function sendToEth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SendToEth, {
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

MsgClient.prototype.requestBatch = function requestBatch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RequestBatch, {
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

MsgClient.prototype.confirmBatch = function confirmBatch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ConfirmBatch, {
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

MsgClient.prototype.depositClaim = function depositClaim(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.DepositClaim, {
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

MsgClient.prototype.withdrawClaim = function withdrawClaim(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.WithdrawClaim, {
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

MsgClient.prototype.valsetUpdateClaim = function valsetUpdateClaim(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ValsetUpdateClaim, {
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

MsgClient.prototype.eRC20DeployedClaim = function eRC20DeployedClaim(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ERC20DeployedClaim, {
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

MsgClient.prototype.setOrchestratorAddresses = function setOrchestratorAddresses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SetOrchestratorAddresses, {
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

MsgClient.prototype.cancelSendToEth = function cancelSendToEth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CancelSendToEth, {
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

MsgClient.prototype.submitBadSignatureEvidence = function submitBadSignatureEvidence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubmitBadSignatureEvidence, {
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

