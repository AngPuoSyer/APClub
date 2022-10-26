import { APClubServices } from '@app/common/serivce/channels.enum';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClubInfoChangeRequestService {
  constructor(private readonly prismaService: PrismaService) {}

  create(
    createOneClubInfoChangeRequestArgs: Prisma.ClubInfoChangeRequestCreateArgs,
  ) {
    return this.prismaService.clubInfoChangeRequest.create(
      createOneClubInfoChangeRequestArgs,
    );
  }

  findOne(
    findOneClubInfoChangeRequestArgs: Prisma.ClubInfoChangeRequestFindFirstArgs,
  ) {
    return this.prismaService.clubInfoChangeRequest.findFirst(
      findOneClubInfoChangeRequestArgs,
    );
  }

  findMany(
    findManyClubInfoChangeRequestArgs: Prisma.ClubInfoChangeRequestFindManyArgs,
  ) {
    return this.prismaService.clubInfoChangeRequest.findMany(
      findManyClubInfoChangeRequestArgs,
    );
  }

  update(
    updateClubInfoChangeRequestArgs: Prisma.ClubInfoChangeRequestUpdateArgs,
  ) {
    return this.prismaService.clubInfoChangeRequest.update(
      updateClubInfoChangeRequestArgs,
    );
  }

  updateMany(
    updateManyClubInfoChangeRequestArgs: Prisma.ClubInfoChangeRequestUpdateManyArgs,
  ) {
    return this.prismaService.clubInfoChangeRequest.updateMany(
      updateManyClubInfoChangeRequestArgs,
    );
  }

  delete(
    deleteClubInfoChangeRequestArgs: Prisma.ClubInfoChangeRequestDeleteArgs,
  ) {
    return this.prismaService.clubInfoChangeRequest.delete(
      deleteClubInfoChangeRequestArgs,
    );
  }

  deleteMany(
    deleteManyClubInfoChangeRequestArgs: Prisma.ClubInfoChangeRequestDeleteManyArgs,
  ) {
    return this.prismaService.clubInfoChangeRequest.deleteMany(
      deleteManyClubInfoChangeRequestArgs,
    );
  }
}
