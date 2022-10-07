import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClubRequestService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createOneClubRequestArgs: Prisma.ClubRequestCreateArgs) {
    return this.prismaService.clubRequest.create(createOneClubRequestArgs);
  }

  findOne(findOneClubRequestArgs: Prisma.ClubRequestFindFirstArgs) {
    return this.prismaService.clubRequest.findFirst(findOneClubRequestArgs);
  }

  findMany(findManyClubRequestArgs: Prisma.ClubRequestFindManyArgs) {
    return this.prismaService.clubRequest.findMany(findManyClubRequestArgs);
  }

  update(updateClubRequestArgs: Prisma.ClubRequestUpdateArgs) {
    return this.prismaService.clubRequest.update(updateClubRequestArgs);
  }

  updateMany(updateManyClubRequestArgs: Prisma.ClubRequestUpdateManyArgs) {
    return this.prismaService.clubRequest.updateMany(updateManyClubRequestArgs);
  }

  delete(deleteClubRequestArgs: Prisma.ClubRequestDeleteArgs) {
    return this.prismaService.clubRequest.delete(deleteClubRequestArgs);
  }

  deleteMany(deleteManyClubRequestArgs: Prisma.ClubRequestDeleteManyArgs) {
    return this.prismaService.clubRequest.deleteMany(deleteManyClubRequestArgs);
  }
}
