"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEip712TypedData = void 0;
const utils_1 = require("./utils");
const getEip712TypedData = ({ msgs, tx, fee, ethereumChainId, }) => {
    const messages = Array.isArray(msgs) ? msgs : [msgs];
    const eip712Msgs = messages.map((m) => m.toEip712());
    const eip712MessageTypes = messages[0].toEip712Types();
    const types = (0, utils_1.getDefaultEip712Types)();
    const typesWithMessageTypes = {
        types: Object.assign(Object.assign({}, types.types), Object.fromEntries(eip712MessageTypes)),
    };
    const typesWithFeePayer = (0, utils_1.getTypesIncludingFeePayer)({
        fee,
        types: typesWithMessageTypes,
    });
    return Object.assign(Object.assign(Object.assign({ primaryType: 'Tx' }, typesWithFeePayer), (0, utils_1.getEip712Domain)(ethereumChainId)), { message: Object.assign(Object.assign(Object.assign({}, (0, utils_1.getEipTxDetails)(tx)), (0, utils_1.getEip712Fee)(fee)), { msgs: eip712Msgs }) });
};
exports.getEip712TypedData = getEip712TypedData;
//# sourceMappingURL=eip712.js.map