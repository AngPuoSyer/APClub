import { UserRoleEnum } from '@core/src/common/roles.enum';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { isEmpty } from 'lodash';
import { roleMetadata } from '../decorator/roles.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const ctx = this.getRequest(context);
    const req = ctx.getContext().req;
    const roles = this.reflector.getAllAndOverride<UserRoleEnum[]>(
      roleMetadata,
      [ctx.getHandler(), ctx.getClass()],
    );
    if (roles.includes(UserRoleEnum.WILDCARD)) return true;
    for (const role of roles) {
      if (!isEmpty(req[role])) return true;
    }
    return true;
    // TODO: change to false once user role is successfully implemented
    // return false;
  }

  getRequest(context: ExecutionContext) {
    return GqlExecutionContext.create(context);
  }
}
