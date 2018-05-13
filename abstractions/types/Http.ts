import { RoutingControllersOptions } from 'routing-controllers';
import { IHttpChecker } from '../checkers/index';

export type HttpCheckers = {
  authorization: IHttpChecker,
  currentUser: IHttpChecker
};

export type HttpOptions = { port: number } & RoutingControllersOptions;

export type HttpConfig = {
  controllers?: Function[],
  middlewares?: Function[],
  options: HttpOptions
};

export type HttpDomains = {
  api: string,
  cdn: string,
  web: string
};
