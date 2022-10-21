export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  redis: RedisConfig;
  rabbitmq: RabbitMqConfig;
}

export interface NestConfig {
  port: number;
  environment: string;
  frontendUrl: string;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
  jwtAccessSecret: string;
  jwtRefreshSecret: string;
  jwtResetSecret: string;
}

export interface RedisConfig {
  redisPort: number;
  redisHost: string;
}

export interface RabbitMqConfig {
  rabbitMqUrl: string;
  rabbitMqPort: number;
  rabbitMqHost: string;
}
