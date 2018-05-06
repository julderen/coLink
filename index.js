"use strict";
exports.__esModule = true;
var App_1 = require("./app/App");
var configs_1 = require("./configs");
var server = new App_1["default"](configs_1["default"][process.env.TYPE]);
server.start();
