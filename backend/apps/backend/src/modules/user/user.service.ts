import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findManyUser(data: Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(data);
  }

  async findOneUser(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(userFindFirstArgs);
  }

  async updateOneUser(userUpdateArgs: Prisma.UserUpdateArgs) {
    this.prismaService.user.update(userUpdateArgs);
  }

  deletePasswordField(user: User): User {
    const u = { ...user };
    delete u['password'];
    return u as User;
  }
}
