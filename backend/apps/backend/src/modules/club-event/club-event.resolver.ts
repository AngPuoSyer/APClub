import { UserRoleEnum } from '@core/src/common/roles.enum';
import { ClubEvent } from '@generated/club-event/club-event.model';
import { CreateOneClubEventArgs } from '@generated/club-event/create-one-club-event.args';
import { FindFirstClubEventArgs } from '@generated/club-event/find-first-club-event.args';
import { FindManyClubEventArgs } from '@generated/club-event/find-many-club-event.args';
import { UpdateOneClubEventArgs } from '@generated/club-event/update-one-club-event.args';
import { ClubEventStatusEnum } from '@generated/prisma/club-event-status.enum';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { ClubEventService } from './club-event.service';

// TODO: Queue Job to auto update event status after 3 days

@Resolver()
export class ClubEventResolver {
  constructor(private readonly clubEventService: ClubEventService) {}

  @Query(() => ClubEvent)
  @RoleGuard(UserRoleEnum.WILDCARD)
  findOneClubEvent(@Args() data: FindFirstClubEventArgs, @Info() info) {
    return this.clubEventService.findOne({
      ...data,
      ...new PrismaSelect(info).value,
    });
  }

  @Query(() => [ClubEvent])
  @RoleGuard(UserRoleEnum.WILDCARD)
  findManyClubEvent(@Args() data: FindManyClubEventArgs, @Info() info) {
    return this.clubEventService.findMany({
      ...data,
      ...new PrismaSelect(info).value,
    });
  }

  @Mutation(() => ClubEvent)
  @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  createClubEvent(@Args() data: CreateOneClubEventArgs, @Info() info) {
    return this.clubEventService.create({
      ...data,
      ...new PrismaSelect(info).value,
    });
  }

  @Mutation(() => ClubEvent)
  @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  updateClubEvent(@Args() data: UpdateOneClubEventArgs, @Info() info) {
    return this.clubEventService.update({
      ...data,
      ...new PrismaSelect(info).value,
    });
  }

  @Mutation(() => ClubEvent)
  @RoleGuard(UserRoleEnum.CLUB_ADMIN, UserRoleEnum.SUPERADMIN)
  updateClubEventStatus(
    @Args() eventId: string,
    @Args() status: ClubEventStatusEnum,
    @Info() info,
  ) {
    return this.clubEventService.update({
      where: {
        id: eventId,
      },
      data: {
        status,
      },
      ...new PrismaSelect(info).value,
    });
  }
}
