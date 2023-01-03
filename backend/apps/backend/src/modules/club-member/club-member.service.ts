import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClubMemberService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: Prisma.ClubMemberCreateArgs) {
    return this.prismaService.clubMember.create(data);
  }

  update(data: Prisma.ClubMemberUpdateArgs) {
    return this.prismaService.clubMember.update(data);
  }

  findOne(data: Prisma.ClubMemberFindFirstArgs) {
    return this.prismaService.clubMember.findFirst(data);
  }

  findMany(data: Prisma.ClubMemberFindManyArgs) {
    return this.prismaService.clubMember.findMany(data);
  }

  delete(data: Prisma.ClubMemberDeleteArgs) {
    return this.prismaService.clubMember.delete(data);
  }

  upsert(data: Prisma.ClubMemberUpsertArgs) {
    return this.prismaService.clubMember.upsert(data);
  }

  count(data: Prisma.ClubMemberCountArgs) {
    return this.prismaService.clubMember.count(data);
  }
}
