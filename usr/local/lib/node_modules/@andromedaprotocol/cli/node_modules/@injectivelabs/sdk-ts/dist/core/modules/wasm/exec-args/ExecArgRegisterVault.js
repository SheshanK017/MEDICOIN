"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExecArgBase_1 = require("../ExecArgBase");
/**
 * @category Contract Exec Arguments
 */
class ExecArgRegisterVault extends ExecArgBase_1.ExecArgBase {
    static fromJSON(params) {
        return new ExecArgRegisterVault(params);
    }
    toData() {
        const { params } = this;
        return {
            vault_code_id: params.vaultCodeId,
            vault_label: params.vaultLabel,
            instantiate_vault_msg: params.instantiateVaultMsg,
        };
    }
    toExecData() {
        return (0, ExecArgBase_1.dataToExecData)('register_vault', this.toData());
    }
}
exports.default = ExecArgRegisterVault;
//# sourceMappingURL=ExecArgRegisterVault.js.map