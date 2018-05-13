import { IUser } from '../entities';

interface IUsersService {
  createUser(info: Partial<IUser>): IUser;
  mergeUser(user: IUser, update: Partial<IUser>): IUser;
  saveUser(user: IUser): Promise<IUser>;
  removeUser(user: IUser): Promise<IUser>;
  getUser(conditions: Partial<IUser>): Promise<IUser>;
  getUserById(id: number): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser>;
  encryptPassword(email: string, password: string): string;
  validatePassword(email: string, password: string, passwordHash: string): boolean;
}

// rollup fix
declare const IUsersService: IUsersService;

export default IUsersService;
