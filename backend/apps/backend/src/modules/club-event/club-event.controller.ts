import { EventReviewQueueEvent } from '@app/common/event/event/event.event';
import { RmqService } from '@app/common/rmq/rmq.service';
import { AppEventService } from '@app/common/serivce/service.enum';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ClubEventStatusEnum } from '@prisma/client';
import { ClubEventService } from './club-event.service';

@Controller()
export class ClubEventController {
  constructor(
    private readonly rmqService: RmqService,
    private readonly clubEventService: ClubEventService,
  ) {}

  @EventPattern(AppEventService.EVENT_REVIEW_EXPIRED)
  async eventReviewExpired(
    @Payload() data: EventReviewQueueEvent,
    @Ctx() ctx: RmqContext,
  ) {
    await this.clubEventService.update({
      where: {
        id: data.eventId,
      },
      data: {
        status: ClubEventStatusEnum.AWAITING,
      },
    });
    this.rmqService.ack(ctx);
  }

  @EventPattern(AppEventService.EVENT_START)
  async eventStart(@Payload() data: any, @Ctx() ctx: RmqContext) {
    await this.clubEventService.update({
      where: {
        id: data.eventId,
      },
      data: {
        status: ClubEventStatusEnum.ONGOING,
      },
    });
    this.rmqService.ack(ctx);
    // TODO: send notification
  }

  @EventPattern(AppEventService.EVENT_END)
  async eventEnd(@Payload() data: any, @Ctx() ctx: RmqContext) {
    await this.clubEventService.update({
      where: {
        id: data.eventId,
      },
      data: {
        status: ClubEventStatusEnum.FINISHED,
      },
    });
    this.rmqService.ack(ctx);
  }

  @EventPattern(AppEventService.EVENT_REVIEW_QUEUED)
  async eventReviewQueued(@Payload() data: any, @Ctx() ctx: RmqContext) {
    this.rmqService.ack(ctx);
    await this.clubEventService.update({
      where: {
        id: data.eventId,
      },
      data: {
        requestJobId: data.jobId,
      },
    });
  }

  @EventPattern(AppEventService.EVENT_START_QUEUED)
  async eventStartQueued(@Payload() data: any, @Ctx() ctx: RmqContext) {
    await this.clubEventService.update({
      where: {
        id: data.eventId,
      },
      data: {
        eventStartJobId: data.startJobId,
        eventEndJobId: data.endJobId,
      },
    });
    this.rmqService.ack(ctx);
  }
}
