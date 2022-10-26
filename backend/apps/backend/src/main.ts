import { RmqService } from '@app/common/rmq/rmq.service';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import {
  CorsConfig,
  NestConfig,
} from '../../../libs/common/src/config/config.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(APClubServices.APP));
  
  await app.startAllMicroservices();

  await app.listen(process.env.PORT || nestConfig.port || 3000);
}
bootstrap();
