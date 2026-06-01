import { Module } from '@nestjs/common';
import { RunsController } from './runs.controller';
import { RunsService } from './runs.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GAME-SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001
        }
      }
    ])
  ],
  controllers: [RunsController],
  providers: [RunsService]
})
export class RunsModule {}
