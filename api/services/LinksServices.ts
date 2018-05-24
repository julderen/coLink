import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { ILinksService } from 'abstractions/services';

import { Link, Album } from 'api/entities';
import { findImage } from 'core/utils/image';
import { CreateLinkModel } from '../models';

@Service()
class LinksService implements ILinksService {
  @OrmRepository(Link)
  private linksRepository: Repository<Link>;

  public async createLink(info: Partial<CreateLinkModel>): Promise<Link> {
    const link = new Link();
    link.name = info.name;
    link.description = info.description;
    link.siteUrl = info.siteUrl;
    link.image = await findImage(info.siteUrl);
    link.album = info.album;

    return this.saveLink(link);
  }


  public async updateLink(info: Partial<CreateLinkModel>, id: number): Promise<Link> {
    const oldLink = await this.getLinkById(id);
    const album = new Link();

    album.name = info.name;
    album.description = info.description;

    const updatedMiner = this.mergeLink(oldLink, album);

    return this.saveLink(updatedMiner);
  }

  public async getLinksByAlbum(album: Album): Promise<Link[]> {
    return this.linksRepository.find({ album });
  }

  public mergeLink(album: Link, update: Partial<Link>): Link {
    return this.linksRepository.merge(album, update);
  }

  public async saveLink(user: Link): Promise<Link> {
    return this.linksRepository.save(user);
  }

  public async removeLink(id: number): Promise<Link> {
    const album = await this.getLinkById(id);

    return this.linksRepository.remove(album);
  }

  public getLinkById(id: number): Promise<Link> {
    return this.linksRepository.findOne({ id });
  }
}

export default LinksService;
