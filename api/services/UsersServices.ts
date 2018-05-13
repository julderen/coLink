import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { IUsersService } from 'abstractions/services';

import { User } from 'api/entities';
import { CreateUserModel } from '../models';

import { encryptPassword } from '../../core/utils/crypto';

@Service()
class UsersService implements IUsersService {
  @OrmRepository(User)
  private usersRepository: Repository<User>;

  public createUser(info: Partial<CreateUserModel>): Promise<User> {
    const user = new User();
    user.email = info.email;
    user.passwordHash = this.encryptPassword(info.email, info.password);
    user.login = info.login;

    return this.saveUser(user);
  }

  public async saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  public getUser(conditions: Partial<User>): Promise<User> {
    return this.usersRepository.findOne(conditions);
  }

  public getUserById(id: number): Promise<User> {
    return this.getUser({ id });
  }

  public getUserByEmail(email: string): Promise<User> {
    return this.getUser({ email });
  }

  public encryptPassword(email: string, password: string): string {
    return encryptPassword(email, password);
  }

  public validatePassword(email: string, password: string, passwordHash: string): boolean {
    const generatedPasswordHash = encryptPassword(email, password);

    return Boolean(generatedPasswordHash === passwordHash);
  }
}

export default UsersService;
