import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class ResetPasswordInfo {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}

export class SetupPasswordInfo {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
