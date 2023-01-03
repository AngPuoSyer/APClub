import { Module } from '@nestjs/common';
import { EventMemberResolver } from './event-member.resolver';
import { EventMemberService } from './event-member.service';

@Module({
  imports: [],
  providers: [EventMemberService, EventMemberResolver],
})
export class EventMemberModule {}
