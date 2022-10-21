import {
  InfoChangeRequestQueueEvent,
  UpdateInfoChangeJobEvent,
} from '@app/common/event/info-change/info-change.event';
import { RmqService } from '@app/common/rmq/rmq.service';
import { SchedularEventService } from '@app/common/serivce/service.enum';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RequestStatusEnum } from '@prisma/client';
import { InfoChangeQueueService } from './info-change-queue.service';

@Controller()
export class InfoChangeQueueController {
  constructor(
    private readonly rmqService: RmqService,
    private readonly infoChangeQueueService: InfoChangeQueueService,
  ) {}

  @EventPattern(SchedularEventService.QUEUE_INFO_CHANGE_REQUEST)
  async queueInfoChangeJob(
    @Payload() data: InfoChangeRequestQueueEvent,
    @Ctx() ctx: RmqContext,
  ) {
    await this.infoChangeQueueService.addJobQueue(data);
    this.rmqService.ack(ctx);
  }

  @EventPattern(SchedularEventService.UPDATE_INFO_CHANGE_QUEUE)
  async updateInfoChangeJob(
    @Payload() data: UpdateInfoChangeJobEvent,
    @Ctx() ctx: RmqContext,
  ) {
    switch (data.action) {
      case RequestStatusEnum.APPROVED:
        await this.infoChangeQueueService.promoteJob(data.jobId);
        break;
      case RequestStatusEnum.REJECTED:
        await this.infoChangeQueueService.deleteJob(data.jobId);
    }
    this.rmqService.ack(ctx);
  }
}
