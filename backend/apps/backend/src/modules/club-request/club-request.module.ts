import { Module } from '@nestjs/common';
import { ClubRequestService } from './club-request.service';

@Module({
  imports: [],
  providers: [ClubRequestService],
})
export class ClubRequestModule {}
