import { Prueba } from '../util/prueba.insterface';
import jt400 = require('node-jt400');

export default class Jt400{
  private static _instance: Jt400;
  public pool: any;  
  private jt400config:any;

public constructor (){
  console.log('Clase inicializada');
  this.jt400config = {
    host: '150.150.6.7',
    user: 'atl1arai',
    password: 'banco123',
    "translate binary": "true"
  }
  this.conectarBD();  

}

public static ejecutarQuery( query:string): Prueba {
  
  let results: Prueba = {
    ok : false,
    msg: 'init result'
  };

  this._instance
  .pool
  .query(query)
  .then( (result:any) => {
    
    console.log('result :', result);
      results =  {
        ok: true,
        result: result,
        msg: 'Sentencia ejecutada correctamente'
      };

  })
  .fail( (error:any) => {
  if (error){
      console.log('error en el query');
      console.log('err :', error.message);
      results.ok =false;
      results.msg = error.message;
  }

});

return results;
    
}

public static get instance(){
  return this._instance || (this._instance = new this());
}

private conectarBD(){
  this.pool = jt400.pool(this.jt400config);
  console.log('Se realizo la conexión');
}

}

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