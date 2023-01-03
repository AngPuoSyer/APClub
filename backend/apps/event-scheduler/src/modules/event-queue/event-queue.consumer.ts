import { EventStartQueueEvent } from '@app/common/event/event/event.event';
import { EventQueueLabel, TaskQueueLabel } from '@app/common/queue/queue.enum';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { AppEventService } from '@app/common/serivce/service.enum';
import { Process, Processor } from '@nestjs/bull';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Job } from 'bull';
import { EventQueueService } from './event-queue.service';

@Processor(TaskQueueLabel.EVENT)
export class EventQueueConsumer {
  constructor(
    @Inject(APClubServices.APP) private readonly appClient: ClientProxy,
    private readonly eventQueueService: EventQueueService,
  ) {
    console.log(this.appClient);
  }

  @Process(EventQueueLabel.SCHEDULE_EXPIRY)
  async eventReviewExpired(
    job: Job<{ eventId: string; startDate: Date; endDate: Date }>,
  ) {
    this.appClient.emit(AppEventService.EVENT_REVIEW_EXPIRED, {
      eventId: job.data.eventId,
    });
    await this.eventQueueService.addEventStartQueue(
      new EventStartQueueEvent(
        job.data.eventId,
        job.data.startDate,
        job.data.endDate,
      ),
    );
  }

  @Process(EventQueueLabel.EVENT_START)
  async eventStart(job: Job<{ eventId: string }>) {
    this.appClient.emit(AppEventService.EVENT_START, {
      eventId: job.data.eventId,
    });
  }

  @Process(EventQueueLabel.EVENT_END)
  async eventEnd(job: Job<{ eventId: string }>) {
    this.appClient.emit(AppEventService.EVENT_END, {
      eventId: job.data.eventId,
    });
  }

  @Process('check')
  async check(job: Job) {
    console.log(job);
    console.log(this.appClient);
  }
}
