"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const services_1 = require("abstractions/services");
const decorators_1 = require("core/decorators");
const errors_1 = require("../errors");
const models_1 = require("../models");
let AuthorizationController = class AuthorizationController {
    async authorize(request, info) {
        const { email: inputEmail, password } = info;
        const email = inputEmail.toLowerCase();
        const user = await this.usersService.getUserByEmail(email);
        if (!user)
            throw new errors_1.IncorrectLoginOrPasswordError();
        const isValid = this.usersService.validatePassword(email, password, user.passwordHash);
        if (!isValid)
            throw new errors_1.IncorrectLoginOrPasswordError();
        return await this.jwtService.generateToken({
            id: user.id,
            email: user.email,
            login: user.login
        });
    }
    getContext(userContext) {
        return userContext;
    }
};
__decorate([
    decorators_1.InjectService('jwt'),
    __metadata("design:type", Object)
], AuthorizationController.prototype, "jwtService", void 0);
__decorate([
    decorators_1.InjectService('users'),
    __metadata("design:type", Object)
], AuthorizationController.prototype, "usersService", void 0);
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Req()),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request,
        models_1.AuthorizationInfo]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "authorize", null);
__decorate([
    routing_controllers_1.Get('/context'),
    __param(0, routing_controllers_1.CurrentUser({ required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.UserContext]),
    __metadata("design:returntype", void 0)
], AuthorizationController.prototype, "getContext", null);
AuthorizationController = __decorate([
    routing_controllers_1.JsonController('/authorization')
], AuthorizationController);
exports.default = AuthorizationController;
