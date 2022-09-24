import { NestFactory } from '@nestjs/core';
import { EventSchedulerModule } from './event-scheduler.module';

async function bootstrap() {
  const app = await NestFactory.create(EventSchedulerModule);
  await app.listen(3002);
}
bootstrap();
