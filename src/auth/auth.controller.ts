import { Body, Controller, Post, UseGuards, Get  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
  return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
  return 'You are authenticated';
  }
}