require(`dotenv`).config();
import { createExpressServer } from 'routing-controllers';
const express = require(`express`);
import { HttpOptions } from '../types';


class Application {
  private server: any;
  private optionals: HttpOptions;

  constructor(config: HttpOptions) {
    this.server = null;
    this.optionals = config;
  }

  public start() {
    this.server = createExpressServer({});
    this.server.use(express.static(`static`));
    this.server.listen(this.optionals.port, this.optionals.hostname, () => {
      console.info(`Server running at http://${this.optionals.hostname}:${this.optionals.port}/`);
    });
  }
}

export default Application;
