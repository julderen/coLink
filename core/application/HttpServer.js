"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
class HttpServer {
    constructor(config) {
        routing_controllers_1.useContainer(typedi_1.Container);
        this.controllers = config.controllers;
        this.middlewares = config.middlewares;
        this.options = config.options;
        this.server = null;
    }
    checkerMiddleware(checker) {
        return (action) => {
            const token = action.request.headers['auth-token'];
            return checker.check(token, action);
        };
    }
    createServer(checkers) {
        console.log(this.options.port);
        this.server = routing_controllers_1.createExpressServer(Object.assign({}, this.options, { middlewares: this.middlewares, controllers: this.controllers, defaultErrorHandler: false, authorizationChecker: checkers ? this.checkerMiddleware(checkers.authorization) : null, currentUserChecker: checkers ? this.checkerMiddleware(checkers.currentUser) : null })).listen(this.options.port);
    }
}
exports.default = HttpServer;
