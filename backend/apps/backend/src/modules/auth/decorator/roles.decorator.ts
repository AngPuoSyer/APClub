import { UserRoleEnum } from '@core/src/common/roles.enum';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guard/gql-auth.guard';
import { UserRoleGuard } from '../guard/roles.guard';

export const roleMetadata = 'roles';

export const RoleGuard = (...roles: UserRoleEnum[]) => {
  return applyDecorators(
    SetMetadata(roleMetadata, roles),
    // UseGuards(GqlAuthGuard),
    UseGuards(UserRoleGuard),
  );
};
