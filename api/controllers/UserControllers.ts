import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import {CreateUserModel, UserContext} from '../models';
import { InjectService } from 'core/decorators';
import { IUsersService, IJWTService } from 'abstractions/services';

@JsonController('/api/users')
export class UserController {
  @InjectService('users')
  private usersService: IUsersService;
  @InjectService('jwt')
  private jwtService: IJWTService;

  @Get()
  getAll() {
    return 'This action returns all users';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('')
  public async createUser(@Body() user: CreateUserModel) {
    const saveUser = await this.usersService.createUser(user);

    return await this.jwtService.generateToken(<UserContext> {
      id: saveUser.id,
      email: saveUser.email,
      login: saveUser.login
    });
  }

  @Put('/:id')
  public async updateUser(@Param('id') id: number, @Body() user: any) {

    return 'Updating a user...';
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}

export default UserController;
