import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ClubAdmin, SuperAdmin, User } from '@prisma/client';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User =>
    GqlExecutionContext.create(ctx).getContext().req.user,
);
