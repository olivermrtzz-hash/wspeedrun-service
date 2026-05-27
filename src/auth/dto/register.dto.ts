<<<<<<< HEAD
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
=======
import { IsEmail, IsString, MinLength, IsNotEmpty, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MaxLength(30)
>>>>>>> 075207a (initial commit)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
<<<<<<< HEAD
=======
  @MaxLength(30)
>>>>>>> 075207a (initial commit)
  country: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}