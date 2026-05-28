import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.guard';
import { UseGuards, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: any) {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: any) {
  return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
  return 'You are authenticated';
  }
}