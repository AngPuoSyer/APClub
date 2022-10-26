import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from '@app/common/config/config.interface';
import { JwtDto } from './dto/jwt.dto';
import { AuthService } from './auth.service';
import { TokenPayload } from './dto/token-payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        configService.get<SecurityConfig>('security').jwtAccessSecret,
    });
  }

  async validate(payload: TokenPayload) {
    const user = await this.authService.validateUser(
      payload.userId,
      payload.role,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return {
      userId: payload.userId,
      role: payload.role,
      status: payload.status,
    };
  }
}
