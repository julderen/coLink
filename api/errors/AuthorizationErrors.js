"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../abstractions/enums");
const errors_1 = require("../../abstractions/errors");
class IncorrectLoginOrPasswordError extends errors_1.HttpError {
    constructor(message) {
        super(404, enums_1.ErrorTypeOption.IncorrectLoginOrPassword, message);
    }
}
exports.IncorrectLoginOrPasswordError = IncorrectLoginOrPasswordError;
class NoRights extends errors_1.HttpError {
    constructor(message) {
        super(404, enums_1.ErrorTypeOption.NotRights, message);
    }
}
exports.NoRights = NoRights;
