export class EventReviewQueueEvent {
  constructor(
    readonly eventId: string,
    readonly expireDate: Date,
    readonly startDate: Date,
    readonly endDate: Date,
  ) {}
}

export class EventStartQueueEvent {
  constructor(
    readonly eventId: string,
    readonly startDate: Date,
    readonly endDate: Date,
  ) {}
}
