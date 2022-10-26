import { InfoChangeRequestQueueEvent } from '@app/common/event/info-change/info-change.event';
import {
  InfoChangeQueueLabel,
  TaskQueueLabel,
} from '@app/common/queue/queue.enum';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class InfoChangeQueueService {
  constructor(
    @InjectQueue(TaskQueueLabel.INFO_CHANGE)
    private readonly infoChangeQueue: Queue,
  ) {}

  async addJobQueue(paylaod: InfoChangeRequestQueueEvent) {
    return this.infoChangeQueue.add(
      InfoChangeQueueLabel.SCHEDULE_EXPIRY,
      {
        requestId: paylaod.requestId,
      },
      {
        delay: paylaod.expireDate.getTime() - new Date().getTime(),
      },
    );
  }

  async deleteJob(jobId: string) {
    return (await this.infoChangeQueue.getJob(jobId)).remove();
  }

  async promoteJob(jobId: string) {
    return (await this.infoChangeQueue.getJob(jobId)).promote();
  }
}
