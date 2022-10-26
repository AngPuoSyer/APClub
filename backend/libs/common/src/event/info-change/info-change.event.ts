import { RequestStatusEnum } from '@prisma/client';
import { InfoChangeActionEnum } from './info-change.enum';

export class InfoChangeRequestQueueEvent {
  constructor(readonly requestId: string, readonly expireDate: Date) {}
}

export class UpdateInfoChangeJobEvent {
  constructor(readonly jobId: string, readonly action: RequestStatusEnum) {}
}

export class InfoChangeRequestConfirmEvent {
  constructor(readonly requestId: string) {}
}
