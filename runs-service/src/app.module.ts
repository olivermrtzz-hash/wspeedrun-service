import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RunsModule } from './runs/runs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    RunsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
