import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './guard/jwt.strategy';
import { JwtAuthGuard } from './guard/auth.guard';
<<<<<<< HEAD

=======
import { PrismaModule } from '../prisma/prisma.module';
>>>>>>> 075207a (initial commit)

@Module({
  imports: [
    JwtModule.register({
<<<<<<< HEAD
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
=======
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
    }),
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    JwtAuthGuard,
  ],
>>>>>>> 075207a (initial commit)
})
export class AuthModule {}