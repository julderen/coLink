import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IUser } from 'abstractions/entities';

import { Album } from './index';

@Entity('users')
class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256 })
  email: string;

  @Column({ type: 'varchar', length: 64 })
  passwordHash: string;

  @Column({ type: 'varchar', length: 64 })
  login: string;

  @OneToMany(type => Album, album => album.owner)
  albums: Album[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}

export default User;
