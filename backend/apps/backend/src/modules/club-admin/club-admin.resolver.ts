import { GetUser } from '@core/src/common/decorator/user.decorator';
import { UserRoleEnum } from '@core/src/common/roles.enum';
import { ClubAdmin } from '@generated/club-admin/club-admin.model';
import { Query, Resolver } from '@nestjs/graphql';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { TokenPayload } from '../auth/dto/token-payload.dto';
import { ClubAdminService } from './club-admin.service';

@Resolver()
export class ClubAdminResolver {
  constructor(private readonly clubAdminService: ClubAdminService) {}
}
