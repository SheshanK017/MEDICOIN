"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tx_1 = require("cosmjs-types/ibc/applications/transfer/v1/tx");
/**
 * @category Messages
 */
class MsgTransferCosmjs {
    constructor(params) {
        this.params = params;
    }
    static fromJSON(params) {
        return new MsgTransferCosmjs(params);
    }
    toProto() {
        throw new Error('Method not implemented.');
    }
    toData() {
        throw new Error('Method not implemented.');
    }
    toAmino() {
        const { params } = this;
        const transferMsg = {
            typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
            value: tx_1.MsgTransfer.fromPartial({
                sourcePort: params.port,
                sourceChannel: params.channelId,
                sender: params.sender,
                receiver: params.receiver,
                token: params.amount,
                timeoutHeight: params.height,
                timeoutTimestamp: params.timeout,
            }),
        };
        return transferMsg;
    }
    toWeb3() {
        throw new Error('Method not implemented.');
    }
    toDirectSign() {
        throw new Error('Method not implemented.');
    }
}
exports.default = MsgTransferCosmjs;
//# sourceMappingURL=MsgTransferCosmjs.js.map