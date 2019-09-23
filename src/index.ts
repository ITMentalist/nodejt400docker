import Server from './server/server';
import Jt400 from './jt400/jt400';
import router from './router/router';
const server =  Server.init();

server.app.use(router);

Jt400.instance;

server.start();
