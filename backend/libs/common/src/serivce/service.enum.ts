export enum SchedularEventService {
  QUEUE_INFO_CHANGE_REQUEST = 'queue-info-change-request',
  UPDATE_INFO_CHANGE_QUEUE = 'update-info-change-queue',
  QUEUE_EVENT_REVIEW = 'queue-event-review',
  PROMOTE_EVENT_REVIEW = 'promote-event-review',
  DELETE_EVENT_QUEUE = 'delete-event-queue',
}

export enum AppEventService {
  INFO_CHANGE_DONE = 'info-change-done',
  INFO_CHANGE_QUEUED = 'info-change-queue',
  EVENT_REVIEW_EXPIRED = 'event-review-expired',
  EVENT_START = 'event-start',
  EVENT_END = 'event-end',
  EVENT_REVIEW_QUEUED = 'event-review-queued',
  EVENT_START_QUEUED = 'event-start-queued',
}
