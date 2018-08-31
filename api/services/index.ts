import { DependencyRegisterObject } from 'abstractions/types';

import UsersServices from './UsersServices';
import AlbumsServices from './AlbumsServices';
import LinksServices from './LinksServices';
import JWTService from './JWTService';
import MailsServices from './MailsServices';

const services: DependencyRegisterObject[] = [
  { prefix: 'service', name: 'mails', target: MailsServices },
  { prefix: 'service', name: 'jwt', target: JWTService },
  { prefix: 'service', name: 'users', target: UsersServices },
  { prefix: 'service', name: 'albums', target: AlbumsServices },
  { prefix: 'service', name: 'links', target: LinksServices }
];

export default services;
