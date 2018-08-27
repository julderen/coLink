import { Container } from 'typedi';
import { RoutingControllersOptions, Action, createExpressServer, useContainer } from 'routing-controllers';
import { HttpConfig, HttpOptions, HttpCheckers } from '../../abstractions/types';
import { IHttpChecker } from '../../abstractions/checkers';

class HttpServer {
  private controllers: Function[];
  private middlewares: Function[];
  private options: HttpOptions;
  private server: any;

  constructor(config: HttpConfig) {
    useContainer(Container);

    this.controllers = config.controllers;
    this.middlewares = config.middlewares;
    this.options = config.options;
    this.server = null;
  }

  private checkerMiddleware(checker: IHttpChecker) {
    return (action: Action): Promise<any> => {
      const token = action.request.headers['auth-token'];

      return checker.check(token, action);
    };
  }

  public createServer(checkers?: HttpCheckers) {
    console.log(this.options.port);
    this.server = createExpressServer({
      ...<RoutingControllersOptions>this.options,
      middlewares: this.middlewares,
      controllers: this.controllers,
      defaultErrorHandler: false,
      authorizationChecker: checkers ? this.checkerMiddleware(checkers.authorization) : null,
      currentUserChecker: checkers ? this.checkerMiddleware(checkers.currentUser) : null
    }).listen(this.options.port);
  }
}

export default HttpServer;
