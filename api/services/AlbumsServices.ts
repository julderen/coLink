import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { IAlbumsService } from 'abstractions/services';

import { Album, User } from 'api/entities';
import { CreateAlbumModel } from '../models';

@Service()
class AlbumsService implements IAlbumsService {
  @OrmRepository(Album)
  private albumsRepository: Repository<Album>;

  public createAlbum(info: Partial<CreateAlbumModel>): Promise<Album> {
    const album = new Album();
    album.name = info.name;
    album.description = info.description;
    album.isPublic = info.isPublic;
    album.owner = info.owner;

    return this.saveAlbum(album);
  }


  public async updateAlbum(info: Partial<CreateAlbumModel>, oldAlbum: Album): Promise<Album> {
    const album = new Album();

    album.name = info.name;
    album.description = info.description;
    album.isPublic = info.isPublic;
    album.owner = info.owner;

    const updatedMiner = this.mergeAlbum(oldAlbum, album);

    return this.saveAlbum(updatedMiner);
  }


  public mergeAlbum(album: Album, update: Partial<Album>): Album {
    return this.albumsRepository.merge(album, update);
  }

  public async saveAlbum(user: Album): Promise<Album> {
    return this.albumsRepository.save(user);
  }

  public async removeAlbum(album: Album): Promise<Album> {
    return this.albumsRepository.remove(album);
  }

  public getAlbumsByUser(user: User): Promise<Album[]> {
    return this.albumsRepository.find({ owner: user });
  }

  public getAlbumById(id: number, options?: object): Promise<Album> {
    return this.albumsRepository.findOne({ id, ...options });
  }
}

export default AlbumsService;
