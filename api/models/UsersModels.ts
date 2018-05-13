import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserModel {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}

export class UserContext {
  id: number;
  email: string;
  login: string;
}
