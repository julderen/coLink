import { ConnectionOptions } from 'typeorm';

export type PostgresDatabaseConfig = {
  entities: Function[];
  options: ConnectionOptions
};
