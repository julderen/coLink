import { DependencyRegisterObject } from 'abstractions/types';

import UsersServices from './UsersServices';
import AlbumsServices from './AlbumsServices';
import JWTService from './JWTService';

const services: DependencyRegisterObject[] = [
  { prefix: 'service', name: 'jwt', target: JWTService },
  { prefix: 'service', name: 'users', target: UsersServices },
  { prefix: 'service', name: 'albums', target: AlbumsServices }
];

export default services;
