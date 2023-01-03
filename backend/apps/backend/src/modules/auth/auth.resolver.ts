import { Logger } from '@nestjs/common';
import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { UserSignUpInput } from './dto/create-user.input';
import { LoginInput } from './dto/login.input';
import { Token } from './dto/token-payload.dto';
import { AuthService } from './auth.service';
import { RoleGuard } from './decorator/roles.decorator';
import { UserRoleEnum } from '@core/src/common/roles.enum';

@Resolver()
export class AuthResolver {
  private logger = new Logger(AuthResolver.name);

  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Token)
  async userSignUp(
    @Args('data') data: UserSignUpInput,
    @Info() info,
  ): Promise<Token> {
    const select = new PrismaSelect(info).value;
    return this.authService.signUpUser(data, select);
  }

  @Mutation(() => String)
  async refreshToken(
    @Args('refreshToken', { type: () => String }) refreshToken,
  ) {
    return this.authService.refreshToken(refreshToken);
  }

  @Mutation(() => Token)
  async loginUser(@Args('data') { email, password }: LoginInput) {
    return this.authService.loginUser(email, password);
  }

  @Mutation(() => Token)
  async loginClubAdmin(@Args('data') { email, password }: LoginInput) {
    return this.authService.loginClubAdmin(email, password);
  }

  @Mutation(() => Token)
  async loginSuperAdmin(@Args('data') { email, password }: LoginInput) {
    return this.authService.loginSuperAdmin(email, password);
  }
}
