"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jt400 = require("node-jt400");
class Jt400 {
    constructor() {
        console.log('Clase inicializada');
        this.jt400config = {
            host: '150.150.6.7',
            user: 'atl1arai',
            password: 'banco123',
            "translate binary": "true"
        };
        this.conectarBD();
    }
    static ejecutarQuery(query, callback) {
        let results = {
            ok: false,
            msg: 'init result'
        };
        this._instance
            .pool
            .query(query)
            .then((result) => {
            console.log('result :', result);
            results = {
                ok: true,
                result: result,
                msg: 'Sentencia ejecutada correctamente'
            };
        })
            .fail((error) => {
            if (error) {
                console.log('error en el query');
                console.log('err :', error.message);
                results.ok = false;
                results.msg = error.message;
            }
        });
        return callback(results);
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    conectarBD() {
        this.pool = jt400.pool(this.jt400config);
        console.log('Se realizo la conexión');
    }
}
exports.default = Jt400;
/*
const pool = require('node-jt400').pool(jt400config);


pool
  .query('SELECT * FROM arai.prueba')
  .then( (result:any) => {
      console.log('result');
      console.log(result);
  })
  .fail( (error:any) => {
      console.log('error');
      console.log(error);
  });
*/ 
