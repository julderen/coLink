import { Inject } from 'typedi';
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { User } from 'entities/index';
import { IUsersService } from 'abstractions/services';

@Controller()
export class UserController {
  @Inject()
  private usersService: IUsersService;

  @Get('/users')
  getAll() {
    return 'This action returns all users';
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('/users')
  public async createUser(@Body() user: User) {
    console.log(this.usersService);
    const saveUser = await this.usersService.createUser(user);

    return saveUser.id;
  }

  @Put('/users/:id')
  public async updateUser(@Param('id') id: number, @Body() user: User) {

    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}

export default UserController;
