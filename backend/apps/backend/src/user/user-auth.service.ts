import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';
import { UserService } from './user.service';

export type UserSignUpArgs = {
  username: string;
  email: string;
  password: string;
  tpNumber: string;
  contactNumber?: string;
};

@Injectable()
export class UserAuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async createOneUser(
    { username, email, password, tpNumber, contactNumber }: UserSignUpArgs,
    select,
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
    return this.userService.deletePasswordField(user);
  }

  private async generatePassword(pass: string, saltRound: number = 10) {
    const salt = await genSalt(saltRound);
    return hash(pass, salt);
  }
}
