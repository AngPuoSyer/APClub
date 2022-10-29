import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClubEventService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: Prisma.ClubEventCreateArgs) {
    return this.prismaService.clubEvent.create(data);
  }

  update(data: Prisma.ClubEventUpdateArgs) {
    return this.prismaService.clubEvent.update(data);
  }

  findOne(data: Prisma.ClubEventFindFirstArgs) {
    return this.prismaService.clubEvent.findFirst(data);
  }

  findMany(data: Prisma.ClubEventFindManyArgs) {
    return this.prismaService.clubEvent.findMany(data);
  }

  delete(data: Prisma.ClubEventDeleteArgs) {
    return this.prismaService.clubEvent.delete(data);
  }
}
