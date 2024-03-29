import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserService, UserResolver],
  exports: [],
})
export class UserModule {}
