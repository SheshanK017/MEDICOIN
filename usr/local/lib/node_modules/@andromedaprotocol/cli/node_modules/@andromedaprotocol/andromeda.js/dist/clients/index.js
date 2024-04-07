"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmClient = void 0;
const ArchwayClient_1 = __importDefault(require("./ArchwayClient"));
const CosmClient_1 = __importDefault(require("./CosmClient"));
const InjectiveClient_1 = __importDefault(require("./InjectiveClient"));
// import TerraClient from "./TerraClient";
var CosmClient_2 = require("./CosmClient");
Object.defineProperty(exports, "CosmClient", { enumerable: true, get: function () { return __importDefault(CosmClient_2).default; } });
function createClient(addressPrefix) {
    switch (addressPrefix) {
        // case "terra":
        //   return new TerraClient();
        case "archway":
            return new ArchwayClient_1.default();
        case "inj":
            return new InjectiveClient_1.default();
        default:
            return new CosmClient_1.default();
    }
}
exports.default = createClient;
