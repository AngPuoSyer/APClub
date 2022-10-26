import { RequestStatusEnum } from '@generated/prisma/request-status.enum';
import { Field, InputType, registerEnumType } from '@nestjs/graphql';

registerEnumType(RequestStatusEnum, { name: 'requestStatusEnum' });

@InputType()
export class UpdateInfoChangeRequestStatusInput {
  @Field()
  requestId: string;

  @Field(() => RequestStatusEnum)
  status: RequestStatusEnum;
}
