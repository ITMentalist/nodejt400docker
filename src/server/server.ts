import express = require('express');

export default class Server {
// Constants
public PORT:number;
public HOST:string;
// App
public app:express.Application;


constructor () {

this.PORT = 4050;
this.HOST = '0.0.0.0';
this.app  = express();

}
static init ()
{
    return new Server();
}

public start(){

  this.app.get('/', (req:any, res:any) => {
    res.send('Hello world\n');
  });
  
  this.app.listen(this.PORT, this.HOST);
  console.log(`Running on http://${this.HOST}:${this.PORT}`); 

}

}