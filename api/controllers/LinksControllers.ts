import { JsonController, Param, Body, Get, Post, Put, Delete, CurrentUser, Authorized } from 'routing-controllers';
import { InjectService } from 'core/decorators';
import { ILinksService, IAlbumsService } from 'abstractions/services';
import { IUser } from 'abstractions/entities';
import { CreateLinkModel } from '../models';
import { AlbumNotExit, NoRights } from '../errors';

@JsonController('/api/links')
export class UserController {
  @InjectService('links')
  private linksService: ILinksService;
  @InjectService('albums')
  private albumsService: IAlbumsService;

  @Get('/:albumId')
  public async getLinks(@CurrentUser() user: IUser, @Param('albumId') albumId: number) {
    const album = await this.albumsService.getAlbumById(albumId, { relations: ['owner'] });

    if (!album) {
      throw new AlbumNotExit();
    }

    if (!album.isPublic && (!user || user.id !== album.owner.id)) {
      throw new NoRights();
    }

    return await this.linksService.getLinksByAlbum(album);
  }

  @Post('/:albumId')
  public async createLink(@CurrentUser({ required: true }) user: IUser, @Param('albumId') albumId: number, @Body() link: CreateLinkModel) {
    const album = await this.albumsService.getAlbumById(albumId, { relations: ['owner'] });

    if (!album) {
      throw new AlbumNotExit();
    }

    if (!user || user.id !== album.owner.id) {
      throw new NoRights();
    }

    const saveLink = await this.linksService.createLink({ ...link, album });

    return saveLink.id;
  }

  @Put('/:albumId')
  public async updateLink(@CurrentUser({ required: true }) user: IUser, @Param('albumId') albumId: number, @Body() link: CreateLinkModel) {
    const album = await this.albumsService.getAlbumById(albumId, { relations: ['owner'] });

    if (!album) {
      throw new AlbumNotExit();
    }

    if (!user || user.id !== album.owner.id) {
      throw new NoRights();
    }

    return await this.linksService.updateLink({ ...link }, albumId);
  }

  @Authorized()
  @Delete('/:id')
  public async removeLink(@Param('id') linkId: number) {
    return await this.linksService.removeLink(linkId);
  }
}

export default UserController;
