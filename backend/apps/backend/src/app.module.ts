import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import config from './common/config/config';
import { PrismaModule } from 'nestjs-prisma';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlConfig } from './common/config/config.interface';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClubAdminModule } from './modules/club-admin/club-admin.module';
import { SuperAdminModule } from './modules/super-admin/super-admin.module';
import { ClubModule } from './modules/club/club.module';
import { ClubRequestModule } from './modules/club-request/club-request.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
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
    ClubRequestModule,
  ],
  providers: [AppService],
})
export class AppModule {}

// TODO: Migrate Individually
// TODO: Role Guard (Refer to lavax)
// TODO: super admin create club
// TODO: admin make change request // task queue
// TODO: super admin approve request
// TODO: pagination
// TODO: remmove password field
