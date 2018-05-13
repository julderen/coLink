import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class AuthorizationInfo {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
