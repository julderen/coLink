import IAlbum from './IAlbum';

interface IUser {
  id: number;
  email: string;
  passwordHash: string;
  password?: string;
  login: string;
  albums: IAlbum[];
  createDate: Date;
  updateDate: Date;
}

declare const IUser: IUser;

export default IUser;
