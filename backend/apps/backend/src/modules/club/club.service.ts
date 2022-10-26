import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClubService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOneClubArgs: Prisma.ClubCreateArgs) {
    return this.prismaService.club.create(createOneClubArgs);
  }

  findOne(findOneClubArgs: Prisma.ClubFindFirstArgs) {
    return this.prismaService.club.findFirst(findOneClubArgs);
  }

  findMany(findManyClubArgs: Prisma.ClubFindManyArgs) {
    return this.prismaService.club.findMany(findManyClubArgs);
  }

  update(updateClubArgs: Prisma.ClubUpdateArgs) {
    return this.prismaService.club.update(updateClubArgs);
  }

  updateMany(updateManyClubArgs: Prisma.ClubUpdateManyArgs) {
    return this.prismaService.club.updateMany(updateManyClubArgs);
  }
}
