import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { FindFirstUserArgs } from '@generated/user/find-first-user.args';
import { User } from '@generated/user/user.model';
import { PrismaSelect } from '@paljs/plugins';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async userFindOne(
    @Args() userFindFirstArgs: FindFirstUserArgs,
    @Info() info,
  ) {
    const select = new PrismaSelect(info).value;
    return this.userService.findOneUser({ ...userFindFirstArgs, ...select });
  }
}
