import { StudentStatusEnum } from '@generated/prisma/student-status.enum';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenPayload {
  @Field()
  userId: string;

  @Field(() => StudentStatusEnum)
  status: StudentStatusEnum;
}

@ObjectType()
export class Token {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}
