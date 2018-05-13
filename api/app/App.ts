require(`dotenv`).config();

import { IHttpChecker } from 'abstractions/checkers';
import { ProjectConfig } from 'abstractions/types';
import { DependencyProvider, PostgresDatabaseContext, HttpServer } from 'core/application/index';
import { getDependency } from 'core/decorators';
import controllers from '../controllers';
import services from '../services';
import checkers from '../checkers';
import entities from '../entities';
import middlewares from '../middlewares';

class Application {
  private dependencyProvider: DependencyProvider;
  private databaseContext: PostgresDatabaseContext;
  private httpServer: HttpServer;

  constructor(environment: string, config: ProjectConfig) {
    this.dependencyProvider = new DependencyProvider(services, checkers);
    this.databaseContext = new PostgresDatabaseContext({ entities, options: config.dbConfig });
    this.httpServer = new HttpServer({ middlewares, controllers, options: config.http });
  }

  public start() {
    this.dependencyProvider.register();

    this.databaseContext.connect()
      .then(() => {
        this.httpServer.createServer({
          authorization: getDependency<IHttpChecker>('checker', 'authorization'),
          currentUser: getDependency<IHttpChecker>('checker', 'currentUser')
        });

        console.log('Server start');
      }).catch(console.error);
  }
}

export default Application;
