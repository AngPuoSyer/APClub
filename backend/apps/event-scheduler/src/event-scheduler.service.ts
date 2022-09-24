import { Injectable } from '@nestjs/common';

@Injectable()
export class EventSchedulerService {
  getHello(): string {
    return 'Hello World!';
  }
}
