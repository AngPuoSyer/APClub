import { Module } from '@nestjs/common';
import { EventSchedulerController } from './event-scheduler.controller';
import { EventSchedulerService } from './event-scheduler.service';

@Module({
  imports: [],
  controllers: [EventSchedulerController],
  providers: [EventSchedulerService],
})
export class EventSchedulerModule {}
