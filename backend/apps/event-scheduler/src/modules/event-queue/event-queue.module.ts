import { TaskQueueLabel } from '@app/common/queue/queue.enum';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { EventQueueConsumer } from './event-queue.consumer';
import { EventQueueController } from './event-queue.controller';
import { EventQueueService } from './event-queue.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: TaskQueueLabel.EVENT,
    }),
  ],
  providers: [EventQueueService, EventQueueConsumer],
  controllers: [EventQueueController],
})
export class EventQueueModule {}
