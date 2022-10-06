import { Module } from '@nestjs/common';
import { ClubService } from './club.service';

@Module({
  imports: [],
  providers: [ClubService],
})
export class ClubModule {}
