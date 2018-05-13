"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const enums_1 = require("abstractions/enums");
let CustomErrorHandler = class CustomErrorHandler {
    error(error, request, response, next) {
        const statusCode = 'httpCode' in error && typeof error.httpCode === 'number' ? error.httpCode : 500;
        const resultError = {
            failure: true,
            type: 'type' in error && error.type ? error.type : enums_1.ErrorTypeOption.InternalServerError
        };
        if ('errors' in error && error.errors) {
            resultError.type = enums_1.ErrorTypeOption.ValidationError;
            resultError.validationErrors = error.errors;
        }
        else if ('message' in error && error.message) {
            resultError.message = error.message;
        }
        response.status(statusCode).json(resultError);
    }
};
CustomErrorHandler = __decorate([
    routing_controllers_1.Middleware({ type: 'after' })
], CustomErrorHandler);
exports.default = CustomErrorHandler;
