import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { CreateAlbumModel } from '../models';
import { InjectService } from 'core/decorators';
import { IAlbumsService } from 'abstractions/services';

@JsonController('/api/albums')
export class UserController {
  @InjectService('albums')
  private albumsService: IAlbumsService;

  @Get()
  getAll() {
    return 'This action returns all users';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('')
  public async createAlbum(@Body() album: CreateAlbumModel) {
    const saveAlbum = await this.albumsService.createAlbum(album);

    return saveAlbum.id;
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
