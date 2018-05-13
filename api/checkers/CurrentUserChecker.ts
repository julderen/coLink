import { Action } from 'routing-controllers';
import { IJWTService } from '../../abstractions/services';
import { IHttpChecker } from '../../abstractions/checkers';
import { InjectService } from '../../core/decorators';

import { UserContext } from '../models';

class CurrentUserChecker implements IHttpChecker {
  @InjectService('jwt')
  private jwtService: IJWTService;

  public async check(token: string, action: Action): Promise<UserContext> {
    if (!token) return undefined;

    let user = undefined;

    try {
      user = await this.jwtService.verifyToken<UserContext>(token);
    } catch (e) { }

    return user;
  }
}

export default CurrentUserChecker;
