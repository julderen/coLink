import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { IAlbumsService } from 'abstractions/services';

import { Album } from 'api/entities';
import { CreateAlbumModel } from '../models';

@Service()
class AlbumsService implements IAlbumsService {
  @OrmRepository(Album)
  private albumsRepository: Repository<Album>;

  public createAlbum(info: Partial<CreateAlbumModel>): Promise<Album> {
    const album = new Album();
    album.name = info.name;
    album.description = info.description;

    return this.saveAlbum(album);
  }

  public async saveAlbum(user: Album): Promise<Album> {
    return this.albumsRepository.save(user);
  }

  public removeAlbum(user: Album): Promise<Album> {
    return this.albumsRepository.remove(user);
  }
}

export default AlbumsService;
