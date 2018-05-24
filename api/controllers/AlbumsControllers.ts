import { JsonController, Param, Body, Get, Post, Put, Delete, CurrentUser } from 'routing-controllers';
import { CreateAlbumModel } from '../models';
import { InjectService } from 'core/decorators';
import { IAlbumsService } from 'abstractions/services';
import { IUser } from 'abstractions/entities';
import { NoRights } from '../errors';

@JsonController('/api/albums')
export class UserController {
  @InjectService('albums')
  private albumsService: IAlbumsService;

  @Get()
  public async getAlbums(@CurrentUser({ required: true }) user: IUser) {
    return await this.albumsService.getAlbumsByUser(user);
  }

  @Post()
  public async createAlbum(@CurrentUser({ required: true }) user: IUser, @Body() album: CreateAlbumModel) {
    const saveAlbum = await this.albumsService.createAlbum({ ...album, owner: user });

    return saveAlbum.id;
  }

  @Put('/:id')
  public async updateAlbum(@CurrentUser() user: IUser, @Param('id') albumId: number, @Body() album: CreateAlbumModel) {
    const oldAlbum = await this.albumsService.getAlbumById(albumId);

    if (oldAlbum.owner !== user) {
      throw new NoRights();
    }

    return await this.albumsService.updateAlbum({ ...album, owner: user }, oldAlbum);
  }

  @Delete('/:id')
  public async removeAlbum(@CurrentUser({ required: true }) user: IUser, @Param('id') albumId: number) {
    const oldAlbum = await this.albumsService.getAlbumById(albumId);

    if (oldAlbum.owner !== user) {
      throw new NoRights();
    }

    return await this.albumsService.removeAlbum(oldAlbum);
  }
}

export default UserController;
