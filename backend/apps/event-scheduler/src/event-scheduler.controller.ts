import { Controller, Get } from '@nestjs/common';
import { EventSchedulerService } from './event-scheduler.service';

@Controller()
export class EventSchedulerController {
  constructor(private readonly eventSchedulerService: EventSchedulerService) {}

  @Get()
  getHello(): string {
    return this.eventSchedulerService.getHello();
  }
}
