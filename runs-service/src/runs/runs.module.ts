import { Module } from '@nestjs/common';
import { RunsController } from './runs.controller';
import { RunsService } from './runs.service';

@Module({
  imports: [GamesService],
  controllers: [RunsController],
  providers: [RunsService]
})
export class RunsModule {}
