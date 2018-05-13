import { DependencyRegisterObject } from '../../abstractions/types';

import AuthorizationChecker from './AuthorizationChecker';
import CurrentUserChecker from './CurrentUserChecker';

const checkers: DependencyRegisterObject[] = [
  { prefix: 'checker', name: 'authorization', target: AuthorizationChecker },
  { prefix: 'checker', name: 'currentUser', target: CurrentUserChecker }
];

export default checkers;
