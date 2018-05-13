"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../abstractions/enums");
const errors_1 = require("../../abstractions/errors");
class NotFoundUserWithEmailError extends errors_1.HttpError {
    constructor(message) {
        super(404, enums_1.ErrorTypeOption.NotFoundUserWithEmail, message);
    }
}
exports.NotFoundUserWithEmailError = NotFoundUserWithEmailError;
class TokenParseFailedError extends errors_1.HttpError {
    constructor(message) {
        super(500, enums_1.ErrorTypeOption.TokenParseFailed, message);
    }
}
exports.TokenParseFailedError = TokenParseFailedError;
class TokenExpiredError extends errors_1.HttpError {
    constructor(message) {
        super(500, enums_1.ErrorTypeOption.TokenExpired, message);
    }
}
exports.TokenExpiredError = TokenExpiredError;
