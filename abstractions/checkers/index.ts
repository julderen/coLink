import { Action } from 'routing-controllers';

export interface IHttpChecker {
  check(token: string, action: Action): Promise<any>;
}
