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
};

export default () => config;
