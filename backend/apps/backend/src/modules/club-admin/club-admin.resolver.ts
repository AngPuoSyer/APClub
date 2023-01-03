import { GetUser } from '@core/src/common/decorator/user.decorator';
import { UserRoleEnum } from '@core/src/common/roles.enum';
import { ClubAdmin } from '@generated/club-admin/club-admin.model';
import { FindManyClubAdminArgs } from '@generated/club-admin/find-many-club-admin.args';
import { Scope } from '@nestjs/common';
import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { validate } from 'class-validator';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { TokenPayload } from '../auth/dto/token-payload.dto';
import { ClubAdminService } from './club-admin.service';

@Resolver()
export class ClubAdminResolver {
  constructor(private readonly clubAdminService: ClubAdminService) {}

  @Query(() => [ClubAdmin])
  findManyClubAdmin(@Args() data: FindManyClubAdminArgs, @Info() info) {
    return this.clubAdminService.findMany({
      ...new PrismaSelect(info).value,
      ...data,
    });
  }
}
