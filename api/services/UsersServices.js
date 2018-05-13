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
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const entities_1 = require("api/entities");
const crypto_1 = require("../../core/utils/crypto");
let UsersService = class UsersService {
    createUser(info) {
        const user = new entities_1.User();
        user.email = info.email;
        user.passwordHash = this.encryptPassword(info.email, info.password);
        user.login = info.login;
        return this.saveUser(user);
    }
    async saveUser(user) {
        return this.usersRepository.save(user);
    }
    getUser(conditions) {
        return this.usersRepository.findOne(conditions);
    }
    getUserById(id) {
        return this.getUser({ id });
    }
    getUserByEmail(email) {
        return this.getUser({ email });
    }
    encryptPassword(email, password) {
        return crypto_1.encryptPassword(email, password);
    }
    validatePassword(email, password, passwordHash) {
        const generatedPasswordHash = crypto_1.encryptPassword(email, password);
        return Boolean(generatedPasswordHash === passwordHash);
    }
};
__decorate([
    typeorm_typedi_extensions_1.OrmRepository(entities_1.User),
    __metadata("design:type", typeorm_1.Repository)
], UsersService.prototype, "usersRepository", void 0);
UsersService = __decorate([
    typedi_1.Service()
], UsersService);
exports.default = UsersService;
