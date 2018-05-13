"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = require("crypto-js");
function encryptPassword(email, password) {
    return crypto_js_1.SHA256(`${email}.newCoLink.${password}`).toString();
}
exports.encryptPassword = encryptPassword;
