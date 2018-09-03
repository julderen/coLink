"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersServices_1 = require("./UsersServices");
const AlbumsServices_1 = require("./AlbumsServices");
const LinksServices_1 = require("./LinksServices");
const JWTService_1 = require("./JWTService");
const MailsServices_1 = require("./MailsServices");
const services = [
    { prefix: 'service', name: 'mails', target: MailsServices_1.default },
    { prefix: 'service', name: 'jwt', target: JWTService_1.default },
    { prefix: 'service', name: 'users', target: UsersServices_1.default },
    { prefix: 'service', name: 'albums', target: AlbumsServices_1.default },
    { prefix: 'service', name: 'links', target: LinksServices_1.default }
];
exports.default = services;
