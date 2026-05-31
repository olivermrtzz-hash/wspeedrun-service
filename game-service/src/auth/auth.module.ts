import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        PassportModule,
        JwtAuthGuard.register({
            secret: 'secretKey',
            signOptions: {expiresIn: '1d'},
        }),
    ],
    providers: [JwtStrategy],
    exports: [JwtStrategy]
})
export class AuthModule {}