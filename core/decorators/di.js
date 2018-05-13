"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
function registerDependency(prefix, name, target) {
    typedi_1.Service(`di-${prefix}-${name}`)(target);
}
exports.registerDependency = registerDependency;
function getDependency(prefix, name) {
    const dependency = typedi_1.Container.get(`di-${prefix}-${name}`);
    if (!dependency)
        throw new Error(`Cannot get ${prefix} ${name} dependency.`);
    return dependency;
}
exports.getDependency = getDependency;
function Inject(prefix, name) {
    return (object, propertyName, index) => {
        typedi_1.Container.registerHandler({ object, propertyName, index, value: () => {
                return getDependency(prefix, name);
            } });
    };
}
exports.Inject = Inject;
function InjectService(serviceName) {
    return Inject('service', serviceName);
}
exports.InjectService = InjectService;
function InjectWorker(workerName) {
    return Inject('worker', workerName);
}
exports.InjectWorker = InjectWorker;
