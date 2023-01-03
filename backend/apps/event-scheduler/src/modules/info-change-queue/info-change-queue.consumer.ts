import { InfoChangeRequestConfirmEvent } from '@app/common/event/info-change/info-change.event';
import {
  InfoChangeQueueLabel,
  TaskQueueLabel,
} from '@app/common/queue/queue.enum';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { AppEventService } from '@app/common/serivce/service.enum';
import { InjectQueue } from '@nestjs/bull';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Job, Queue } from 'bull';

@Injectable()
export class InfoChangeQueueConsumer implements OnModuleInit {
  constructor(
    @InjectQueue(TaskQueueLabel.INFO_CHANGE)
    private readonly infoChangeQueue: Queue,
    @Inject(APClubServices.APP) private readonly appClient: ClientProxy,
  ) {
    this.infoChangeQueue.process(
      InfoChangeQueueLabel.SCHEDULE_EXPIRY,
      this.updateInfoChange,
    );
  }

  onModuleInit() {}

  async updateInfoChange(job: Job<{ requestId: string }>) {
    this.appClient.emit<void, InfoChangeRequestConfirmEvent>(
      AppEventService.INFO_CHANGE_DONE,
      new InfoChangeRequestConfirmEvent(job.data.requestId),
    );
  }
}
