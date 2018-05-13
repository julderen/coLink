import { JsonController, Post, Req, Body, Get, CurrentUser } from 'routing-controllers';
import { IJWTService, IUsersService } from 'abstractions/services';
import { InjectService } from 'core/decorators';
import { IncorrectLoginOrPasswordError } from '../errors';
import { AuthorizationInfo, UserContext } from '../models';

@JsonController('/authorization')
class AuthorizationController {
  @InjectService('jwt')
  private jwtService: IJWTService;
  @InjectService('users')
  private usersService: IUsersService;

  @Post()
  public async authorize(
    @Req() request: Request,
    @Body() info: AuthorizationInfo
  ) {
    const { email: inputEmail, password } = info;

    const email = inputEmail.toLowerCase();
    const user = await this.usersService.getUserByEmail(email);

    if (!user)
      throw new IncorrectLoginOrPasswordError();

    const isValid = this.usersService.validatePassword(email, password, user.passwordHash);

    if (!isValid)
      throw new IncorrectLoginOrPasswordError();

    return await this.jwtService.generateToken(<UserContext> {
      id: user.id,
      email: user.email,
      login: user.login
    });
  }

  @Get('/context')
  public getContext(
    @CurrentUser({ required: true }) userContext: UserContext
  ) {
    return userContext;
  }
}

export default AuthorizationController;
