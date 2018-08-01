import 'reflect-metadata';
import App from './app/App';
import configs from '../configs';

const server = new App(process.env.TYPE, configs[process.env.TYPE] || configs.local);

server.start();
