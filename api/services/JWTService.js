"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base64_url_1 = require("base64-url");
const jsonwebtoken_1 = require("jsonwebtoken");
const SECRET_KEY = 'addfsfsfssd';
const EXPIRES_TIME = '48h';
class JWTService {
    generateToken(payload, options, toBase64) {
        return new Promise((resolve, reject) => {
            const payloadObject = Object.assign({}, payload);
            jsonwebtoken_1.default.sign(payloadObject, SECRET_KEY, Object.assign({ expiresIn: EXPIRES_TIME }, options), (err, token) => {
                if (err)
                    return reject(err);
                const finalToken = toBase64 ? base64_url_1.default.encode(token) : token;
                resolve(finalToken);
            });
        });
    }
    verifyToken(token, options, isBase64) {
        return new Promise((resolve, reject) => {
            const inputToken = isBase64 ? base64_url_1.default.decode(token) : token;
            jsonwebtoken_1.default.verify(inputToken, SECRET_KEY, Object.assign({ maxAge: EXPIRES_TIME }, options), (err, payload) => {
                if (err)
                    return reject(err);
                resolve(payload);
            });
        });
    }
    decodeToken(token, options) {
        return new Promise((resolve, reject) => {
            const payload = jsonwebtoken_1.default.decode(token, options);
            if (!payload)
                return reject('Empty payload');
            resolve(payload);
        });
    }
}
exports.default = JWTService;
