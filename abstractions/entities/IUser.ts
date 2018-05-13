interface IUser {
  id: number;
  email: string;
  passwordHash: string;
  login: string;
  createDate: Date;
  updateDate: Date;
}

export default IUser;
