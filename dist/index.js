"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const jt400_1 = __importDefault(require("./jt400/jt400"));
const router_1 = __importDefault(require("./router/router"));
const server = server_1.default.init();
server.app.use(router_1.default);
jt400_1.default.instance;
server.start();
