"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this.PORT = 4050;
        this.HOST = '0.0.0.0';
        this.app = express();
    }
    static init() {
        return new Server();
    }
    start() {
        this.app.get('/', (req, res) => {
            res.send('Hello world\n');
        });
        this.app.listen(this.PORT, this.HOST);
        console.log(`Running on http://${this.HOST}:${this.PORT}`);
    }
}
exports.default = Server;
