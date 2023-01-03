import { EventReviewQueueEvent } from '@app/common/event/event/event.event';
import { APClubServices } from '@app/common/serivce/channels.enum';
import { SchedularEventService } from '@app/common/serivce/service.enum';
import { UserRoleEnum } from '@core/src/common/roles.enum';
import { ClubEvent } from '@generated/club-event/club-event.model';
import { CreateOneClubEventArgs } from '@generated/club-event/create-one-club-event.args';
import { FindFirstClubEventArgs } from '@generated/club-event/find-first-club-event.args';
import { FindManyClubEventArgs } from '@generated/club-event/find-many-club-event.args';
import { UpdateOneClubEventArgs } from '@generated/club-event/update-one-club-event.args';
import { ClubEventStatusEnum } from '@generated/prisma/club-event-status.enum';
import { Inject, InternalServerErrorException } from '@nestjs/common';
import {
  Args,
  Info,
  Mutation,
  Query,
  registerEnumType,
  Resolver,
} from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaSelect } from '@paljs/plugins';
import { add, endOfDay } from 'date-fns';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { TokenPayload } from '../auth/dto/token-payload.dto';
import { ClubEventService } from './club-event.service';

registerEnumType(ClubEventStatusEnum, { name: 'clubEventStatusEnum' });

@Resolver()
export class ClubEventResolver {
  constructor(
    private readonly clubEventService: ClubEventService,
    @Inject(APClubServices.SCHEDULER)
    private readonly schedulerClient: ClientProxy,
  ) {
    console.log(this.schedulerClient);
  }

  @Query(() => Boolean)
  checkJobs() {
    this.schedulerClient.emit('check', {});
    return true;
  }

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

  @Query(() => Number)
  countTotalClubEvent() {
    return this.clubEventService.count({});
  }

  @Mutation(() => ClubEvent)
  @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  async createClubEvent(@Args() data: CreateOneClubEventArgs, @Info() info) {
    const event = await this.clubEventService.create({
      ...data,
      ...new PrismaSelect(info).value,
    });
    if (!event)
      throw new InternalServerErrorException('Could not create event');
    this.schedulerClient.emit(
      SchedularEventService.QUEUE_EVENT_REVIEW,
      new EventReviewQueueEvent(
        event.id,
        endOfDay(add(new Date(), { days: 3 })),
        event.startAt,
        event.endAt,
      ),
    );
    return event;
  }

  @Mutation(() => ClubEvent)
  @RoleGuard(UserRoleEnum.CLUB_ADMIN, UserRoleEnum.SUPERADMIN)
  async updateClubEvent(@Args() data: UpdateOneClubEventArgs, @Info() info) {
    const event = await this.clubEventService.update({
      ...data,
      select: {
        ...new PrismaSelect(info).value.select,
        requestJobId: true,
        eventStartJobId: true,
        eventEndJobId: true,
      },
    });
    if (event.status === ClubEventStatusEnum.AWAITING) {
      this.schedulerClient.emit(SchedularEventService.PROMOTE_EVENT_REVIEW, {
        jobId: event.requestJobId,
      });
    } else if (event.status === ClubEventStatusEnum.CANCELLED) {
      this.schedulerClient.emit(SchedularEventService.DELETE_EVENT_QUEUE, {
        jobId: event.requestJobId,
      });
    }
    return event;
  }

  @Mutation(() => ClubEvent)
  @RoleGuard(UserRoleEnum.CLUB_ADMIN, UserRoleEnum.SUPERADMIN)
  updateClubEventStatus(
    @Args('eventId', { type: () => String }) eventId: string,
    @Args('status', { type: () => ClubEventStatusEnum })
    status: ClubEventStatusEnum,
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
