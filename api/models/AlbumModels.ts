import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlbumModel {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;
}
