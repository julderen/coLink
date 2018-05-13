import { Container, Service } from 'typedi';

export function registerDependency(prefix: string, name: string, target: object) {
  Service(`di-${prefix}-${name}`)(target);
}

export function getDependency<T>(prefix: string, name: string) {
  const dependency = Container.get(`di-${prefix}-${name}`);

  if (!dependency)
    throw new Error(`Cannot get ${prefix} ${name} dependency.`);

  return dependency as T;
}

export function Inject(prefix: string, name: string) {
  return (object: Object, propertyName: string, index?: number) => {
    Container.registerHandler({ object, propertyName, index, value: () => {
      return getDependency(prefix, name);
    }});
  };
}

export function InjectService(serviceName) {
  return Inject('service', serviceName);
}

export function InjectWorker(workerName) {
  return Inject('worker', workerName);
}
