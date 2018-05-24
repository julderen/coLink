"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
exports.User = User_1.default;
const Album_1 = require("./Album");
exports.Album = Album_1.default;
const Link_1 = require("./Link");
exports.Link = Link_1.default;
exports.default = [
    User_1.default,
    Link_1.default,
    Album_1.default
];
