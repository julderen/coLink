import IAlbum from './IAlbum';

interface ILink {
  id: number;
  name: string;
  siteUrl: string;
  image: string;
  description: string;
  album: IAlbum;
  createDate: Date;
  updateDate: Date;
}

declare const ILink: ILink;

export default ILink;
