import { Module } from '@nestjs/common';
import { ClubEventService } from './club-event.service';

@Module({
  imports: [],
  providers: [ClubEventService],
})
export class ClubEventModule {}
