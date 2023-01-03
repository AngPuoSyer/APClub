import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '@app/common/config/config';
import { PrismaModule } from 'nestjs-prisma';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlConfig } from '../../../libs/common/src/config/config.interface';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClubAdminModule } from './modules/club-admin/club-admin.module';
import { SuperAdminModule } from './modules/super-admin/super-admin.module';
import { ClubModule } from './modules/club/club.module';
import { ClubInfoChangeRequestModule } from './modules/club-request/club-info-change-request.module';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { ClubEventModule } from './modules/club-event/club-event.module';
import { ClubMemberModule } from './modules/club-member/club-member.module';
import { EventMemberModule } from './modules/event-member/event-member.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    RmqModule.register(APClubServices.SCHEDULER),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './backend/src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
      // useFactory: async (eventEmitter: EventEmitter2) => {
      //   return {
      //     middlewares: [
      //       excludeDeletedMiddleware,
      //       onSoftDeleteMiddleware,
      //       onAssetDeletedMiddleware(eventEmitter),
      //       prismaLoggingMiddleware(),
      //     ],
      //   };
      // },
      // inject: [EventEmitter2],
    }),
    UserModule,
    AuthModule,
    ClubAdminModule,
    SuperAdminModule,
    ClubModule,
    ClubInfoChangeRequestModule,
    ClubEventModule,
    ClubMemberModule,
    EventMemberModule,
  ],
})
export class AppModule {}
