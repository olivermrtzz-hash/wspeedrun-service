import { IsEmail, IsString, MinLength, IsNotEmpty, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MaxLength(30)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(30)
  country: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}