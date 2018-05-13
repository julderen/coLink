import 'reflect-metadata';
import App from './api/app/App';
import configs from './configs';

const server = new App(process.env.TYPE, configs[process.env.TYPE]);

server.start();
