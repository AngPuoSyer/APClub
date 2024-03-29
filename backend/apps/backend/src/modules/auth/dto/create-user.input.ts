import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class UserSignUpInput {
  @Field()
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(8)
  password: string;

  @Field()
  // TODO: IsTPNumber validator
  tpNumber: string;

  @Field()
  contactNumber?: string;
}
