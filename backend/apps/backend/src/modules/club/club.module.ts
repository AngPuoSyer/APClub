import { Module } from '@nestjs/common';
import { ClubResolver } from './club.resolver';
import { ClubService } from './club.service';

@Module({
  imports: [],
  providers: [ClubService, ClubResolver],
})
export class ClubModule {}
