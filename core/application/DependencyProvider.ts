import { DependencyRegisterObject } from 'icorating.abstractions/types';
import { registerDependency } from '../decorators';

class DependencyProvider {
  private diRegisterObjects: DependencyRegisterObject[];

  constructor(...diRegisterObjects: DependencyRegisterObject[][]) {
    this.diRegisterObjects = diRegisterObjects.reduce((prev, next) => prev.concat(next), []);
  }

  public register() {
    this.diRegisterObjects.forEach((di: DependencyRegisterObject) => {
      registerDependency(di.prefix, di.name, di.target);
    });
  }
}

export default DependencyProvider;
