"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("../decorators");
class DependencyProvider {
    constructor(...diRegisterObjects) {
        this.diRegisterObjects = diRegisterObjects.reduce((prev, next) => prev.concat(next), []);
    }
    register() {
        this.diRegisterObjects.forEach((di) => {
            decorators_1.registerDependency(di.prefix, di.name, di.target);
        });
    }
}
exports.default = DependencyProvider;
