import { Module } from '@nestjs/common';
import { ClubMemberResolver } from './club-member.resolver';
import { ClubMemberService } from './club-member.service';

@Module({
  imports: [],
  providers: [ClubMemberService, ClubMemberResolver],
})
export class ClubMemberModule {}
