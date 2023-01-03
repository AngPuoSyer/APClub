import { GetUser } from '@core/src/common/decorator/user.decorator';
import { UserRoleEnum } from '@core/src/common/roles.enum';
import { ClubMember } from '@generated/club-member/club-member.model';
import { FindManyClubMemberArgs } from '@generated/club-member/find-many-club-member.args';
import { Resolver, Query, Info, Args, Mutation } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { ClubMemberStatusEnum } from '@prisma/client';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { TokenPayload } from '../auth/dto/token-payload.dto';
import { ClubMemberService } from './club-member.service';

@Resolver()
export class ClubMemberResolver {
  constructor(private readonly clubMemberService: ClubMemberService) {}

  @RoleGuard(UserRoleEnum.CLUB_ADMIN, UserRoleEnum.MEMBER)
  @Query(() => ClubMember, { nullable: true })
  async getMeMember(
    @Args('clubId', { type: () => String }) clubId: string,
    @GetUser() user: TokenPayload,
    @Info() info,
  ) {
    return this.clubMemberService.findOne({
      ...new PrismaSelect(info).value,
      where: {
        clubId: {
          equals: clubId,
        },
        userId: {
          equals: user.userId,
        },
        deletedAt: {
          equals: null,
        },
      },
    });
  }

  @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  @Query(() => [ClubMember])
  async findManyClubMember(@Args() data: FindManyClubMemberArgs, @Info() info) {
    return this.clubMemberService.findMany({
      ...data,
      ...new PrismaSelect(info).value,
    });
  }

  @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  @Query(() => Number)
  countTotalClubMember(@Args('clubId', { type: () => String }) clubId: string) {
    return this.clubMemberService.count({
      where: {
        clubId,
      },
    });
  }

  @RoleGuard(UserRoleEnum.MEMBER)
  @Query(() => [ClubMember], { nullable: true })
  getMyClubs(@GetUser() user: TokenPayload, @Info() info) {
    return this.clubMemberService.findMany({
      where: {
        userId: user.userId,
        status: ClubMemberStatusEnum.ACTIVE,
      },
      ...new PrismaSelect(info).value,
    });
  }

  @RoleGuard(UserRoleEnum.CLUB_ADMIN, UserRoleEnum.MEMBER)
  @Mutation(() => ClubMember, { nullable: true })
  async joinClub(
    @Args('clubId', { type: () => String }) clubId: string,
    @GetUser() user: TokenPayload,
    @Info() info,
  ) {
    return this.clubMemberService.upsert({
      ...new PrismaSelect(info).value,
      where: {
        userId_clubId: {
          clubId,
          userId: user.userId,
        },
      },
      create: {
        clubId: clubId,
        userId: user.userId,
        status: ClubMemberStatusEnum.ACTIVE,
        deletedAt: null,
      },
      update: {
        status: ClubMemberStatusEnum.ACTIVE,
        deletedAt: null,
      },
    });
  }

  @RoleGuard(UserRoleEnum.CLUB_ADMIN, UserRoleEnum.MEMBER)
  @Mutation(() => ClubMember, { nullable: true })
  async leaveClub(
    @Args('clubId', { type: () => String }) clubId: string,
    @GetUser() user: TokenPayload,
    @Info() info,
  ) {
    return this.clubMemberService.update({
      ...new PrismaSelect(info).value,
      where: {
        userId_clubId: {
          clubId: clubId,
          userId: user.userId,
        },
      },
      data: {
        deletedAt: new Date(),
        status: ClubMemberStatusEnum.LEFT,
      },
    });
  }
}
