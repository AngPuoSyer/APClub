import { RmqService } from '@app/common/rmq/rmq.service';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EventSchedulerModule } from './event-scheduler.module';

async function bootstrap() {
  const app = await NestFactory.create(EventSchedulerModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(APClubServices.SCHEDULER));
  await app.startAllMicroservices();
}
bootstrap();
