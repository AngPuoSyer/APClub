import {
  InfoChangeRequestConfirmEvent,
  UpdateInfoChangeJobEvent,
} from '@app/common/event/info-change/info-change.event';
import { RmqService } from '@app/common/rmq/rmq.service';
import { AppEventService } from '@app/common/serivce/service.enum';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RequestStatusEnum } from '@prisma/client';
import { ClubInfoChangeRequestService } from './club-info-change-request.service';

@Controller('/club-info-change-request')
export class ClubInfoChangeRequestController {
  constructor(
    private readonly rmqService: RmqService,
    private readonly clubInfoChangeReqeustService: ClubInfoChangeRequestService,
  ) {}

  @EventPattern(AppEventService.INFO_CHANGE_DONE)
  async updateInfoChange(
    @Payload() data: InfoChangeRequestConfirmEvent,
    @Ctx() ctx: RmqContext,
  ) {
    await this.clubInfoChangeReqeustService.update({
      where: {
        id: data.requestId,
      },
      data: {
        status: RequestStatusEnum.APPROVED,
      },
    });
    this.rmqService.ack(ctx);
    // TODO: event to update the club
  }

  @EventPattern(AppEventService.INFO_CHANGE_QUEUED)
  async updateJobInfo(
    @Payload() data: UpdateInfoChangeJobEvent,
    @Ctx() ctx: RmqContext,
  ) {
    await this.clubInfoChangeReqeustService.update({
      where: {
        id: data.jobId,
      },
      data: {
        jobId: data.jobId,
      },
    });
    this.rmqService.ack(ctx);
  }
}
