import { IAlbum } from '../entities';

interface IAlbumsService {
  createAlbum(info: Partial<IAlbum>): Promise<IAlbum>;
  saveAlbum(album: IAlbum): Promise<IAlbum>;
  removeAlbum(album: IAlbum): Promise<IAlbum>;
}

// rollup fix
declare const IAlbumsService: IAlbumsService;

export default IAlbumsService;
