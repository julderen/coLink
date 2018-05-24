import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ILink } from 'abstractions/entities';
import Album from './Album';

@Entity('links')
class Link implements ILink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({ type: 'varchar', length: 256 })
  description: string;

  @Column({ type: 'varchar', length: 256 })
  siteUrl: string;

  @Column({ type: 'varchar', length: 256 })
  image: string;

  @ManyToOne(type => Album, album => album.links, { cascade: true })
  album: Album;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}

export default Link;
