import IUser from './IUser';
import ILink from './ILink';

interface IAlbum {
  id: number;
  name: string;
  description: string;
  isPublic: boolean;
  owner: IUser;
  links: ILink[];
  createDate: Date;
  updateDate: Date;
}

declare const IAlbum: IAlbum;

export default IAlbum;
