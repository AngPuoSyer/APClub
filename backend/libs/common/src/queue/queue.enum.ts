export enum TaskQueueLabel {
  INFO_CHANGE = 'info-change-queue',
  EVENT = 'event',
}

export enum InfoChangeQueueLabel {
  SCHEDULE_EXPIRY = 'schedule-expiry',
}

export enum EventQueueLabel {
  SCHEDULE_EXPIRY = 'schedule-expiry',
  EVENT_START = 'event-start',
  EVENT_END = 'event-end',
}
