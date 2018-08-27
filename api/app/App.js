"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("core/application");
const decorators_1 = require("core/decorators");
const controllers_1 = require("../controllers");
const services_1 = require("../services");
const checkers_1 = require("../checkers");
const entities_1 = require("../entities");
const middlewares_1 = require("../middlewares");
class Application {
    constructor(environment, config) {
        this.dependencyProvider = new application_1.DependencyProvider(services_1.default, checkers_1.default);
        this.databaseContext = new application_1.PostgresDatabaseContext({ entities: entities_1.default, options: config.dbConfig });
        this.httpServer = new application_1.HttpServer({ middlewares: middlewares_1.default, controllers: controllers_1.default, options: config.http });
    }
    start() {
        this.dependencyProvider.register();
        this.databaseContext.connect()
            .then(() => {
            this.httpServer.createServer({
                authorization: decorators_1.getDependency('checker', 'authorization'),
                currentUser: decorators_1.getDependency('checker', 'currentUser')
            });
            console.log('Server start');
        }).catch(console.error);
    }
}
exports.default = Application;
