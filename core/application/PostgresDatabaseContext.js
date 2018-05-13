"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
class PostgresDatabaseContext {
    constructor(config) {
        typeorm_1.useContainer(typedi_1.Container);
        this.entities = config.entities;
        this.options = config.options;
    }
    async connect() {
        return typeorm_1.createConnection(Object.assign({}, this.options, { entities: this.entities }));
    }
}
exports.default = PostgresDatabaseContext;
