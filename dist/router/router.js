"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jt400_1 = __importDefault(require("../jt400/jt400"));
const router = express_1.Router();
router.get('/prueba', (req, res) => {
    //let results: Prueba = {};
    const query = `SELECT * FROM arai.prueba`;
    jt400_1.default.ejecutarQuery(query, (results) => {
        console.log('results.ok :', results.ok);
        if (!results.ok) {
            res.status(400).json({
                ok: false,
                error: results
            });
        }
        else {
            res.json({
                ok: true,
                prueba: results
            });
        }
    });
});
exports.default = router;
