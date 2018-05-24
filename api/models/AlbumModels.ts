import { IsNotEmpty, IsString } from 'class-validator';
import { IUser } from 'abstractions/entities';

export class CreateAlbumModel {
  @IsNotEmpty()
  @IsString()
  name: string;

  description: string;

  isPublic: boolean;

  owner: IUser;
}
