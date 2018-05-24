import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { IAlbum } from 'abstractions/entities';
import User from './User';
import Link from './Link';

@Entity('albums')
class Album implements IAlbum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({ type: 'varchar', length: 256 })
  description: string;

  @Column({ type: 'boolean' })
  isPublic: boolean;

  @ManyToOne(type => User, user => user.albums, { cascade: true })
  @JoinColumn()
  owner: User;

  @OneToMany(type => Link, link => link.album)
  links: Link[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}

export default Album;
