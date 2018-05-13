interface IUser {
  id: number;
  email: string;
  passwordHash: string;
  password?: string;
  login: string;
  createDate: Date;
  updateDate: Date;
}

declare const IUser: IUser;

export default IUser;
