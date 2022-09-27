import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneUser(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(userFindFirstArgs);
  }
}
