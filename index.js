require(`dotenv`).config();
const express = require(`express`);
const configs = require(`./configs/configs`);
const routes = require(`./routes/routes`);

const app = express();
routes.init(app);
console.log(configs);
const port = configs[process.env.TYPE].port;
const hostname = configs[process.env.TYPE].hostname;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
