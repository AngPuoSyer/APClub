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
    expiresIn: '1h',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
    jwtAccessSecret:
      process.env.JWT_ACCESS_SECRET || 'nestjsPrismaAccessSecret',
    jwtRefreshSecret:
      process.env.JWT_REFRESH_SECRET || 'nestjsPrismaRefreshSecret',
    jwtResetSecret: process.env.JWT_RESET_SECRET || 'nestjsPrismaResetSecret',
  },
};

export default () => config;
