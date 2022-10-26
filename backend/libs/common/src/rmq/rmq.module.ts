import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqConfig } from '../config/config.interface';
import { RmqService } from './rmq.service';

interface RmqModuleOptions {
  name: string;
}

@Global()
@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register(...names: string[]): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync(
          names.map((name) => {
            return {
              name,
              useFactory: (configService: ConfigService) => ({
                transport: Transport.RMQ,
                options: {
                  urls: [
                    configService.get<RabbitMqConfig>('rabbitmq').rabbitMqUrl,
                  ],
                  queue: name,
                },
              }),
              inject: [ConfigService],
            };
          }),
        ),
      ],
      exports: [ClientsModule],
    };
  }
}
