import { UserRoleEnum } from '@core/src/common/roles.enum';
import { Club } from '@generated/club/club.model';
import { CreateOneClubArgs } from '@generated/club/create-one-club.args';
import { FindFirstClubArgs } from '@generated/club/find-first-club.args';
import { FindManyClubArgs } from '@generated/club/find-many-club.args';
import { Injectable } from '@nestjs/common';
import { Args, Info, Mutation, Query } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { ClubService } from './club.service';

@Injectable()
export class ClubResolver {
  constructor(private readonly clubService: ClubService) {}

  @Query(() => Club)
  async findOneClub(@Args() findOneClubInput: FindFirstClubArgs, @Info() info) {
    const select = new PrismaSelect(info).value;
    return this.clubService.findOne({ ...findOneClubInput, ...select });
  }

  // TODO: pagination
  @Query(() => [Club])
  async findManyClub(
    @Args() findManyClubInput: FindManyClubArgs,
    @Info() info,
  ) {
    const select = new PrismaSelect(info).value;
    return this.clubService.findMany({ ...findManyClubInput, ...select });
  }

  @RoleGuard(UserRoleEnum.SUPERADMIN)
  @Mutation(() => Club)
  async createOneClub(
    @Args() createOneClubInput: CreateOneClubArgs,
    @Info() info,
  ) {
    const select = new PrismaSelect(info).value;
    return this.clubService.create({ ...createOneClubInput, ...select });
  }
}
