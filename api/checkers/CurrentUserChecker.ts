import { Action } from 'routing-controllers';
import { IJWTService } from 'abstractions/services';
import { IHttpChecker } from 'abstractions/checkers';
import { IUser } from 'abstractions/entities';
import { InjectService } from 'core/decorators';

class CurrentUserChecker implements IHttpChecker {
  @InjectService('jwt')
  private jwtService: IJWTService;

  public async check(token: string, action: Action): Promise<IUser> {
    if (!token) return undefined;

    let user = undefined;

    try {
      user = await this.jwtService.verifyToken<IUser>(token);
    } catch (e) { }

    return user;
  }
}

export default CurrentUserChecker;
