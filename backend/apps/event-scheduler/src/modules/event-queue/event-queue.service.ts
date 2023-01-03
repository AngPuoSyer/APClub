import {
  EventReviewQueueEvent,
  EventStartQueueEvent,
} from '@app/common/event/event/event.event';
import { EventQueueLabel, TaskQueueLabel } from '@app/common/queue/queue.enum';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { AppEventService } from '@app/common/serivce/service.enum';
import { InjectQueue } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Queue } from 'bull';

@Injectable()
export class EventQueueService {
  constructor(
    @InjectQueue(TaskQueueLabel.EVENT)
    private readonly eventReviewQueue: Queue,
    @Inject(APClubServices.APP) private readonly appClient: ClientProxy,
  ) {}

  async addEventReviewExpiryQueue(payload: EventReviewQueueEvent) {
    const job = await this.eventReviewQueue.add(
      EventQueueLabel.SCHEDULE_EXPIRY,
      {
        eventId: payload.eventId,
        startDate: payload.startDate,
        endDate: payload.endDate,
      },
      {
        delay: new Date(payload.expireDate).getTime() - new Date().getTime(),
      },
    );
    this.appClient.emit(AppEventService.EVENT_REVIEW_QUEUED, {
      jobId: job.id,
      eventId: payload.eventId,
    });
  }

  async addEventStartQueue(payload: EventStartQueueEvent) {
    const [startJob, endJob] = await this.eventReviewQueue.addBulk([
      {
        name: EventQueueLabel.EVENT_START,
        data: {
          eventId: payload.eventId,
        },
        opts: {
          delay: new Date(payload.startDate).getTime() - new Date().getTime(),
        },
      },
      {
        name: EventQueueLabel.EVENT_END,
        data: {
          eventId: payload.eventId,
        },
        opts: {
          delay: new Date(payload.endDate).getTime() - new Date().getTime(),
        },
      },
    ]);
    this.appClient.emit(AppEventService.EVENT_START_QUEUED, {
      startJobId: startJob.id,
      endJobId: endJob.id,
      eventId: payload.eventId,
    });
  }

  async deleteJob(jobId: string) {
    return (await this.eventReviewQueue.getJob(jobId)).remove();
  }

  async promoteJob(jobId: string) {
    return (await this.eventReviewQueue.getJob(jobId)).promote();
  }

  async checkJob() {
    console.log(await this.eventReviewQueue.getJobCounts());
    console.log(this.appClient);
    console.log(
      await this.eventReviewQueue.getJobs([
        'active',
        'completed',
        'delayed',
        'failed',
        'paused',
        'waiting',
      ]),
    );
    await this.eventReviewQueue.add('check', {});
  }
}
