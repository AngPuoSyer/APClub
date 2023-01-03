import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { FindFirstUserArgs } from '@generated/user/find-first-user.args';
import { User } from '@generated/user/user.model';
import { PrismaSelect } from '@paljs/plugins';
import { RoleGuard } from '../auth/decorator/roles.decorator';
import { UserRoleEnum } from '@core/src/common/roles.enum';
import { TokenPayload } from '../auth/dto/token-payload.dto';
import { GetUser } from '@core/src/common/decorator/user.decorator';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async findOneUser(
    @Args({ nullable: true }) userFindFirstArgs: FindFirstUserArgs,
    @Info() info,
  ) {
    const select = new PrismaSelect(info).value;
    return this.userService.findOneUser({ ...userFindFirstArgs, ...select });
  }

  @Query(() => [User])
  async findManyUser(
    @Args({ nullable: true }) userFindFirstArgs: FindFirstUserArgs,
    @Info() info,
  ) {
    const select = new PrismaSelect(info).value;
    return this.userService.findManyUser({ ...userFindFirstArgs, ...select });
  }

  @RoleGuard(UserRoleEnum.CLUB_ADMIN, UserRoleEnum.MEMBER)
  @Query(() => User)
  getMe(@GetUser() user: TokenPayload, @Info() info) {
    return this.userService.findOneUser({
      ...new PrismaSelect(info).value,
      where: {
        id: user.userId,
      },
    });
  }
}
