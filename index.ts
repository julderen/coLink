import App from './app/App';
import configs from './configs';
import 'reflect-metadata';

const server = new App(configs[process.env.TYPE]);

server.start();
