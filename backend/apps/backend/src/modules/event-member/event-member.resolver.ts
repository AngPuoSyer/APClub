import { GetUser } from '@core/src/common/decorator/user.decorator';
import { UserRoleEnum } from '@core/src/common/roles.enum';
import { ClubEventMember } from '@generated/club-event-member/club-event-member.model';
import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { User } from '@prisma/client';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { EventMemberService } from './event-member.service';

@Resolver()
export class EventMemberResolver {
  constructor(private readonly eventMemberService: EventMemberService) {}

  @Mutation(() => ClubEventMember)
  @RoleGuard(UserRoleEnum.MEMBER)
  joinEvent(@Args() eventId: string, @GetUser() user: User, @Info() info) {
    return this.eventMemberService.joinEvent(
      eventId,
      user.id,
      new PrismaSelect(info).value,
    );
  }
}
