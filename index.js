"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const App_1 = require("./api/app/App");
const configs_1 = require("./configs");
const server = new App_1.default(process.env.TYPE, configs_1.default[process.env.TYPE]);
server.start();
