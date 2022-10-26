import { UserRoleEnum } from '@core/src/common/roles.enum';
import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { ClubInfoChangeRequestService } from './club-info-change-request.service';
import { CreateOneClubInfoChangeRequestArgs } from '@generated/club-info-change-request/create-one-club-info-change-request.args';
import { ClubInfoChangeRequest } from '@generated/club-info-change-request/club-info-change-request.model';
import { PrismaSelect } from '@paljs/plugins';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SchedularEventService } from '@app/common/serivce/service.enum';
import { APClubServices } from '@app/common/serivce/channels.enum';
import {
  InfoChangeRequestQueueEvent,
  UpdateInfoChangeJobEvent,
} from '@app/common/event/info-change/info-change.event';
import { RequestStatusEnum } from '@generated/prisma/request-status.enum';
import { UpdateInfoChangeRequestStatusInput } from './dto/update-info-change-request.input';

@Resolver()
export class ClubInfoChangeRequestResolver {
  constructor(
    private readonly clubInfoChangeRequestService: ClubInfoChangeRequestService,
    @Inject(APClubServices.SCHEDULER)
    private readonly schedularClient: ClientProxy,
  ) {}

  @Mutation(() => ClubInfoChangeRequest)
  @RoleGuard(UserRoleEnum.CLUB_ADMIN)
  async createClubInfoChangeRequest(
    @Args() clubInfoChangeRequestCreateArgs: CreateOneClubInfoChangeRequestArgs,
    @Info() info,
  ) {
    const request = await this.clubInfoChangeRequestService.create({
      ...clubInfoChangeRequestCreateArgs,
      ...new PrismaSelect(info).value,
    });
    this.schedularClient.emit<void, InfoChangeRequestQueueEvent>(
      SchedularEventService.QUEUE_INFO_CHANGE_REQUEST,
      new InfoChangeRequestQueueEvent(request.id, request.expireDate),
    );
    return request;
  }

  @Mutation(() => ClubInfoChangeRequest)
  @RoleGuard(UserRoleEnum.SUPERADMIN)
  async updateClubInfoChangeRequestStatus(
    @Args('data') data: UpdateInfoChangeRequestStatusInput,
    @Info() info,
  ) {
    const request = await this.clubInfoChangeRequestService.update({
      where: {
        id: data.requestId,
      },
      data: {
        status: data.status,
      },
      ...new PrismaSelect(info).value,
    });
    this.schedularClient.emit<void, UpdateInfoChangeJobEvent>(
      SchedularEventService.UPDATE_INFO_CHANGE_QUEUE,
      new UpdateInfoChangeJobEvent(
        request.jobId,
        request.status as RequestStatusEnum,
      ),
    );
    // TODO: event to update club
    return request;
  }
}
