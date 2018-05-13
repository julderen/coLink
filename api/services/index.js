"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersServices_1 = require("./UsersServices");
const AlbumsServices_1 = require("./AlbumsServices");
const JWTService_1 = require("./JWTService");
const services = [
    { prefix: 'service', name: 'jwt', target: JWTService_1.default },
    { prefix: 'service', name: 'users', target: UsersServices_1.default },
    { prefix: 'service', name: 'albums', target: AlbumsServices_1.default }
];
exports.default = services;
