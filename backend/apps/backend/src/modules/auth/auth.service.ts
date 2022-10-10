import { SecurityConfig } from '@core/src/common/config/config.interface';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { genSalt, hash, compare } from 'bcrypt';
import { isEmpty } from 'lodash';
import { PrismaService } from 'nestjs-prisma';
import { UserSignUpInput } from './dto/create-user.input';
import { Token, TokenPayload } from './dto/token-payload.dto';
import { StudentStatusEnum } from '@generated/prisma/student-status.enum';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signUpUser(
    { username, email, password, tpNumber, contactNumber }: UserSignUpInput,
    select: any,
  ) {
    const checkUser = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            username,
          },
          {
            email,
          },
          {
            tpNumber,
          },
        ],
      },
    });
    if (checkUser) throw new ConflictException('User already exists');

    const passwordHash = await this.generatePassword(password);
    const user = await this.prismaService.user.create({
      ...select,
      data: {
        username,
        email,
        tpNumber,
        contactNumber,
        password: passwordHash,
      },
    });

    return this.generateTokens(
      new TokenPayload(user.id, user.status as StudentStatusEnum),
    );
  }

  async loginUser(email: string, password: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
    if (isEmpty(user)) throw new UnauthorizedException('Invalid Credentials');
    if (await compare(password, user.password))
      throw new UnauthorizedException('Invalid Credentials');
    return this.generateTokens(
      new TokenPayload(user.id, user.status as StudentStatusEnum),
    );
  }

  async loginClubAdmin(email: string, password: string) {
    const admin = await this.prismaService.clubAdmin.findFirst({
      where: {
        user: {
          email: email,
        },
      },
      include: {
        user: true,
      },
    });
    if (isEmpty(admin)) throw new UnauthorizedException('Invalid Credentials');
    if (await compare(password, admin.user.password))
      throw new UnauthorizedException('Invalid Credentials');
    return this.generateTokens(
      new TokenPayload(admin.user.id, admin.user.status as StudentStatusEnum),
    );
  }

  async createOneSuperAdmin(username: string, password: string) {
    const sa = await this.prismaService.superAdmin.findFirst({
      where: {
        username,
      },
    });
    if (sa) throw new ConflictException('Super Admin Exisis');
    const hashedPassword = await this.generatePassword(password);
    const newSA = await this.prismaService.superAdmin.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    return this.generateTokens(
      new TokenPayload(newSA.id, StudentStatusEnum.ACTIVE),
    );
  }

  async loginSuperAdmin(username: string, password: string) {
    const admin = await this.prismaService.superAdmin.findFirst({
      where: {
        username,
      },
    });
    if (isEmpty(admin)) throw new UnauthorizedException('Invalid Credentials');
    if (await compare(password, admin.password))
      throw new UnauthorizedException('Invalid Credentials');
    return this.generateTokens(
      new TokenPayload(admin.id, StudentStatusEnum.ACTIVE),
    );
  }

  generateTokens(payload: TokenPayload): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  refreshToken(token: string) {
    try {
      const { userId, status } = this.jwtService.verify<TokenPayload>(token, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });
      return this.generateTokens({
        userId,
        status,
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async getUserFromToken(token: string, select?: any) {
    const id = this.decodeToken(token).userId;
    return this.prismaService.user.findUnique({ where: { id }, ...select });
  }

  async validateUser(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: userId },
    });
  }

  private decodeToken(token: string): TokenPayload {
    return this.jwtService.decode(token) as TokenPayload;
  }

  private generateAccessToken(payload: TokenPayload): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: TokenPayload): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

  private async generatePassword(pass: string, saltRound: number = 10) {
    const salt = await genSalt(saltRound);
    return hash(pass, salt);
  }
}
