import { Module } from '@nestjs/common';
import { ClubEventController } from './club-event.controller';
import { ClubEventResolver } from './club-event.resolver';
import { ClubEventService } from './club-event.service';

@Module({
  imports: [],
  providers: [ClubEventService, ClubEventResolver],
  controllers: [ClubEventController],
})
export class ClubEventModule {}
