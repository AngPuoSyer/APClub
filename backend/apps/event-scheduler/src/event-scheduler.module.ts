import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '@app/common/config/config';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { RedisConfig } from '@app/common/config/config.interface';
import { InfoChangeQueueModule } from './modules/info-change-queue/info-change-queue.module';
import { EventQueueModule } from './modules/event-queue/event-queue.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    RmqModule.register(APClubServices.APP),
    BullModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const redislConfig = configService.get<RedisConfig>('redis');
        return {
          redis: {
            host: redislConfig.redisHost,
            port: redislConfig.redisPort,
          },
        };
      },
      inject: [ConfigService],
    }),
    InfoChangeQueueModule,
    EventQueueModule,
  ],
  controllers: [],
  providers: [],
})
export class EventSchedulerModule {}
