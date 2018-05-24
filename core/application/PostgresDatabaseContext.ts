import { Container } from 'typedi';
import { Connection, ConnectionOptions, createConnection, useContainer } from 'typeorm';
import { PostgresDatabaseConfig } from 'abstractions/types';

class PostgresDatabaseContext {
  private entities: Function[];
  private options: ConnectionOptions;

  constructor(config: PostgresDatabaseConfig) {
    useContainer(Container);

    this.entities = config.entities;
    this.options = config.options;
  }

  public async connect() : Promise<Connection> {
    return createConnection({
      ...this.options,
      entities: this.entities
    });
  }
}

export default PostgresDatabaseContext;
