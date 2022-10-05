import { SecurityConfig } from '@core/src/common/config/config.interface';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from './decorator/gql-auth.guard';
import { JwtStrategy } from './decorator/jwt.strategy';
import { UserAuthResolver } from './user-auth.resolver';
import { UserAuthService } from './user-auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_ACCESS_SECRET'),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [UserAuthService, UserAuthResolver, JwtStrategy, GqlAuthGuard],
  exports: [],
})
export class AuthModule {}
