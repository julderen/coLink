import 'reflect-metadata';
require(`dotenv`).config();
import App from './app/App';
import configs from '../configs';

console.log(process.env);
const server = new App(process.env.NODE_ENV, configs[process.env.NODE_ENV] || configs.local);
server.start();
