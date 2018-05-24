import { ILink, IAlbum } from '../entities';

interface ILinksService {
  createLink(info: Partial<ILink>): Promise<ILink>;
  mergeLink(miner: ILink, update: Partial<ILink>): ILink;
  saveLink(album: ILink): Promise<ILink>;
  updateLink(info: Partial<ILink>, id: number): Promise<ILink>;
  getLinksByAlbum(album: IAlbum): Promise<ILink[]>;
  removeLink(id: number): Promise<ILink>;
  getLinkById(id: number): Promise<ILink>;
}

// rollup fix
declare const ILinksService: ILinksService;

export default ILinksService;
