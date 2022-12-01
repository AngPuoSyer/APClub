import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClubAdminService {
  constructor(private readonly prismaService: PrismaService) {}

  findOne(data: Prisma.ClubAdminFindFirstArgs) {
    return this.prismaService.clubAdmin.findFirst(data);
  }
}
