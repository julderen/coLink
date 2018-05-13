"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class HttpError extends routing_controllers_1.HttpError {
    constructor(httpCode, type, message) {
        super(httpCode, message);
        this.type = type;
    }
}
exports.HttpError = HttpError;
