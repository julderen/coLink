import { IsNotEmpty, IsString } from 'class-validator';
import { IAlbum } from 'abstractions/entities';

export class CreateLinkModel {
  @IsNotEmpty()
  @IsString()
  name: string;

  description: string;

  @IsNotEmpty()
  @IsString()
  siteUrl: string;

  album: IAlbum;
}
