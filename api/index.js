"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require(`dotenv`).config();
const App_1 = require("./app/App");
const configs_1 = require("../configs");
console.log(process.env);
const server = new App_1.default(process.env.NODE_ENV, configs_1.default[process.env.NODE_ENV] || configs_1.default.local);
server.start();
