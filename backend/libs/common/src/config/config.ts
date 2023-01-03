import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: Number(process.env.PORT) || 8000,
    environment: process.env.ENVIRONMENT || 'development',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000/',
  },
  cors: {
    enabled: true,
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '7d',
    refreshIn: '1m',
    bcryptSaltOrRound: 10,
    jwtAccessSecret:
      process.env.JWT_ACCESS_SECRET || 'nestjsPrismaAccessSecret',
    jwtRefreshSecret:
      process.env.JWT_REFRESH_SECRET || 'nestjsPrismaRefreshSecret',
    jwtResetSecret: process.env.JWT_RESET_SECRET || 'nestjsPrismaResetSecret',
  },
  redis: {
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: Number(process.env.REDIS_PORT) || 6379,
  },
  rabbitmq: {
    rabbitMqHost: process.env.RABBIT_MQ_HOST || 'localhost',
    rabbitMqPort: Number(process.env.RABBIT_MQ_PORT) || 5672,
    rabbitMqUrl: process.env.RABBIT_MQ_URL || 'amqp://localhost:5672',
  },
};

export default () => config;
