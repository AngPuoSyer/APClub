import { StudentStatusEnum } from '@generated/prisma/student-status.enum';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenPayload {
  @Field()
  userId: string;

  @Field(() => StudentStatusEnum)
  status: StudentStatusEnum;

  constructor(userId: string, status: StudentStatusEnum) {
    this.userId = userId;
    this.status = status;
  }
}

@ObjectType()
export class Token {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
