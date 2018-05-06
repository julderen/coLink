import App from './app/App';
import configs from './configs';

const server = new App(configs[process.env.TYPE]);

server.start();
