import { DependencyRegisterObject } from 'abstractions/types';

import UserServices from './UserServices';
import JWTService from './JWTService';

const services: DependencyRegisterObject[] = [
  { prefix: 'service', name: 'jwt', target: JWTService },
  { prefix: 'service', name: 'user', target: UserServices }
];

export default services;
