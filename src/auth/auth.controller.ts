<<<<<<< HEAD
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.guard';
import { UseGuards, Get } from '@nestjs/common';
=======
import { Body, Controller, Post, UseGuards, Get  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
>>>>>>> 075207a (initial commit)

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
<<<<<<< HEAD
  register(@Body() body: any) {
=======
  register(@Body() body: RegisterDto) {
>>>>>>> 075207a (initial commit)
    return this.authService.register(body);
  }

  @Post('login')
<<<<<<< HEAD
  login(@Body() body: any) {
=======
  login(@Body() body: LoginDto) {
>>>>>>> 075207a (initial commit)
  return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
  return 'You are authenticated';
  }
}