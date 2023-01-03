import { EventReviewQueueEvent } from '@app/common/event/event/event.event';
import { UpdateInfoChangeJobEvent } from '@app/common/event/info-change/info-change.event';
import { RmqService } from '@app/common/rmq/rmq.service';
import { SchedularEventService } from '@app/common/serivce/service.enum';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { EventQueueService } from './event-queue.service';

@Controller()
export class EventQueueController {
  constructor(
    private readonly rmqService: RmqService,
    private readonly eventQueueService: EventQueueService,
  ) {}

  @EventPattern(SchedularEventService.QUEUE_EVENT_REVIEW)
  async queueInfoChangeJob(
    @Payload() data: EventReviewQueueEvent,
    @Ctx() ctx: RmqContext,
  ) {
    await this.eventQueueService.addEventReviewExpiryQueue(data);
    this.rmqService.ack(ctx);
  }

  @EventPattern(SchedularEventService.PROMOTE_EVENT_REVIEW)
  async promoteEventJob(@Payload() data: any, @Ctx() ctx: RmqContext) {
    await this.eventQueueService.promoteJob(data.jobId);
    this.rmqService.ack(ctx);
  }

  @EventPattern(SchedularEventService.DELETE_EVENT_QUEUE)
  async deleteEventJob(@Payload() data: any, @Ctx() ctx: RmqContext) {
    await this.eventQueueService.deleteJob(data.jobId);
    this.rmqService.ack(ctx);
  }

  @EventPattern('check')
  async checkJob(@Payload() data: any, @Ctx() ctx: RmqContext) {
    await this.eventQueueService.checkJob();
    this.rmqService.ack(ctx);
  }
}
