import { TaskQueueLabel } from '@app/common/queue/queue.enum';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { InfoChangeQueueConsumer } from './info-change-queue.consumer';
import { InfoChangeQueueController } from './info-change-queue.controller';
import { InfoChangeQueueService } from './info-change-queue.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: TaskQueueLabel.INFO_CHANGE,
    }),
  ],
  providers: [InfoChangeQueueConsumer, InfoChangeQueueService],
  controllers: [InfoChangeQueueController],
})
export class InfoChangeQueueModule {}
