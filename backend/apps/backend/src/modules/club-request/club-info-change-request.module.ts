import { Module } from '@nestjs/common';
import { ClubInfoChangeRequestResolver } from './club-info-change-request.resolver';
import { ClubInfoChangeRequestService } from './club-info-change-request.service';

@Module({
  imports: [],
  providers: [ClubInfoChangeRequestService, ClubInfoChangeRequestResolver],
})
export class ClubInfoChangeRequestModule {}
