import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { User } from '../../entities/index';

import { encryptPassword } from '../../core/utils/crypto';

@Service()
class UsersService {
  @OrmRepository(User)
  private usersRepository: Repository<User>;

  public createUser(info: Partial<User>): Promise<User> {
    const user = new User();
    user.email = info.email;
    user.passwordHash = info.passwordHash;
    user.login = info.login;

    return this.saveUser(user);
  }

  public mergeUser(user: User, update: Partial<User>): User {
    return this.usersRepository.merge(user, update);
  }

  public async saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  public removeUser(user: User): Promise<User> {
    return this.usersRepository.remove(user);
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
