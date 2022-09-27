import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneUser(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(userFindFirstArgs);
  }

  deletePasswordField(user: User): User {
    const u = { ...user };
    delete u['password'];
    return u as User;
  }
}
