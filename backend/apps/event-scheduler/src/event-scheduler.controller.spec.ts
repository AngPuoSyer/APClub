import { Test, TestingModule } from '@nestjs/testing';
import { EventSchedulerController } from './event-scheduler.controller';
import { EventSchedulerService } from './event-scheduler.service';

describe('EventSchedulerController', () => {
  let eventSchedulerController: EventSchedulerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventSchedulerController],
      providers: [EventSchedulerService],
    }).compile();

    eventSchedulerController = app.get<EventSchedulerController>(EventSchedulerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventSchedulerController.getHello()).toBe('Hello World!');
    });
  });
});
