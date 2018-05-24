import { IAlbum, IUser } from '../entities';

interface IAlbumsService {
  createAlbum(info: Partial<IAlbum>): Promise<IAlbum>;
  mergeAlbum(miner: IAlbum, update: Partial<IAlbum>): IAlbum;
  saveAlbum(album: IAlbum): Promise<IAlbum>;
  updateAlbum(info: Partial<IAlbum>, oldAlbum: IAlbum): Promise<IAlbum>;
  removeAlbum(album: IAlbum): Promise<IAlbum>;
  getAlbumsByUser(user: IUser): Promise<IAlbum[]>;
  getAlbumById(id: number, options?: object): Promise<IAlbum>;
}

// rollup fix
declare const IAlbumsService: IAlbumsService;

export default IAlbumsService;
