import { UserRoleEnum } from '@core/src/common/roles.enum';
import { StudentStatusEnum } from '@generated/prisma/student-status.enum';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

registerEnumType(UserRoleEnum, { name: 'UserRoleEnum' });

@ObjectType()
export class TokenPayload {
  @Field()
  userId: string;

  @Field(() => UserRoleEnum)
  role: UserRoleEnum;

  @Field(() => StudentStatusEnum)
  status: StudentStatusEnum;

  constructor(userId: string, role: UserRoleEnum, status: StudentStatusEnum) {
    this.userId = userId;
    this.role = role;
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
