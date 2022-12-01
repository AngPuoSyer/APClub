import { TokenPayload } from '@core/src/modules/auth/dto/token-payload.dto';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): TokenPayload => {
    return GqlExecutionContext.create(ctx).getContext().req.user;
  },
);
