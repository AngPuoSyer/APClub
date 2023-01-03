import { Module } from '@nestjs/common';
import { ClubAdminResolver } from './club-admin.resolver';
import { ClubAdminService } from './club-admin.service';

@Module({
  imports: [],
  providers: [ClubAdminService, ClubAdminResolver],
})
export class ClubAdminModule {}
