"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthorizationChecker_1 = require("./AuthorizationChecker");
const CurrentUserChecker_1 = require("./CurrentUserChecker");
const checkers = [
    { prefix: 'checker', name: 'authorization', target: AuthorizationChecker_1.default },
    { prefix: 'checker', name: 'currentUser', target: CurrentUserChecker_1.default }
];
exports.default = checkers;
