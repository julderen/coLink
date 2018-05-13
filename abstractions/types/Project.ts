import { ConnectionOptions } from 'typeorm';
import { HttpOptions, HttpDomains } from './Http';

export type ProjectSendgridConfig = {
  apiKey: string,
  from: string
};

export type ProjectConfig = {
  http?: HttpOptions,
  domains: HttpDomains,
  sendgrid: ProjectSendgridConfig,
  dbConfig: ConnectionOptions
};
