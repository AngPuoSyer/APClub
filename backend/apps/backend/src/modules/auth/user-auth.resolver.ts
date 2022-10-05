import { Logger } from '@nestjs/common';
import { Args, Info, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { UserSignUpInput } from './dto/create-user.input';
import { LoginInput } from './dto/login.input';
import { Token } from './dto/token-payload.dto';
import { UserAuthService } from './user-auth.service';

@Resolver()
export class UserAuthResolver {
  private logger = new Logger(UserAuthResolver.name);

  constructor(private readonly authService: UserAuthService) {}

  @Mutation(() => Token)
  async userSignUp(
    @Args() data: UserSignUpInput,
    @Info() info,
  ): Promise<Token> {
    const select = new PrismaSelect(info).value;
    return this.authService.signUpUser(data, select);
  }

  @Mutation(() => Token)
  async loginUser(@Args('data') { email, password }: LoginInput) {
    return this.authService.loginUser(email, password);
  }
}
