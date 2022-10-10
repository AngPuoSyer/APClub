import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ClubAdmin, SuperAdmin, User } from '@prisma/client';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User =>
    GqlExecutionContext.create(ctx).getContext().req.user,
);

export const GetClubAdmin = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): ClubAdmin =>
    GqlExecutionContext.create(ctx).getContext().req.clubAdmin,
);

export const GetSuperAdmin = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): SuperAdmin =>
    GqlExecutionContext.create(ctx).getContext().req.superAdmin,
);
