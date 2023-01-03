import { GetUser } from '@core/src/common/decorator/user.decorator';
import { UserRoleEnum } from '@core/src/common/roles.enum';
import { ClubEventMember } from '@generated/club-event-member/club-event-member.model';
import { FindManyClubEventMemberArgs } from '@generated/club-event-member/find-many-club-event-member.args';
import {
  Args,
  Info,
  Mutation,
  Resolver,
  Query,
  registerEnumType,
} from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { ClubMemberEventAttendanceEnum, User } from '@prisma/client';
import { info } from 'console';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { TokenPayload } from '../auth/dto/token-payload.dto';
import { EventMemberService } from './event-member.service';

registerEnumType(ClubMemberEventAttendanceEnum, {
  name: 'clubMemberEventAttendanceEnum',
});

@Resolver()
export class EventMemberResolver {
  constructor(private readonly eventMemberService: EventMemberService) {}

  @Query(() => ClubEventMember, { nullable: true })
  @RoleGuard(UserRoleEnum.MEMBER)
  getMeEventMember(
    @Args('eventId', { type: () => String }) eventId: string,
    @GetUser() user: TokenPayload,
    @Info() info,
  ) {
    return this.eventMemberService.findOne({
      where: {
        eventId: {
          equals: eventId,
        },
        userId: {
          equals: user.userId,
        },
      },
      ...new PrismaSelect(info).value,
    });
  }

  @Query(() => Number)
  countTotalEventMember(
    @Args('eventId', { type: () => String }) eventId: string,
  ) {
    return this.eventMemberService.count({
      where: {
        eventId,
      },
    });
  }

  // @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  @Query(() => [ClubEventMember])
  async findManyEventMember(
    @Args() data: FindManyClubEventMemberArgs,
    @Info() info,
  ) {
    return this.eventMemberService.findMany({
      ...data,
      ...new PrismaSelect(info).value,
    });
  }

  @Query(() => [ClubEventMember], { nullable: true })
  @RoleGuard(UserRoleEnum.MEMBER)
  getMyEvents(@GetUser() user: TokenPayload, @Info() info) {
    return this.eventMemberService.findMany({
      where: {
        userId: {
          equals: user.userId,
        },
        event: {
          startAt: {
            gte: new Date(),
          },
        },
      },
      ...new PrismaSelect(info).value,
    });
  }

  @Mutation(() => ClubEventMember)
  @RoleGuard(UserRoleEnum.MEMBER)
  joinEvent(
    @Args('eventId', { type: () => String }) eventId: string,
    @GetUser() user: TokenPayload,
    @Info() info,
  ) {
    return this.eventMemberService.joinEvent(
      eventId,
      user.userId,
      new PrismaSelect(info).value,
    );
  }

  @Mutation(() => ClubEventMember)
  @RoleGuard(UserRoleEnum.MEMBER)
  leaveEvent(
    @Args('eventId', { type: () => String }) eventId: string,
    @GetUser() user: TokenPayload,
    @Info() info,
  ) {
    return this.eventMemberService.delete({
      ...new PrismaSelect(info).value,
      where: {
        userId_eventId: {
          userId: user.userId,
          eventId,
        },
      },
    });
  }

  @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  @Mutation(() => ClubEventMember)
  updateEventAttendance(
    @Args('memberId', { type: () => String }) id: string,
    @Args('attendance', { type: () => ClubMemberEventAttendanceEnum })
    attendance: ClubMemberEventAttendanceEnum,
    @Info() info,
  ) {
    return this.eventMemberService.update({
      where: {
        id,
      },
      data: {
        attendance,
      },
      ...new PrismaSelect(info).value,
    });
  }
}
