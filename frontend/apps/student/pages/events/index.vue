<template>
  <div class="container">
    <div class="flex justify-between">
      <div>
        <h1 class="container-heading">Events</h1>
      </div>
      <div class="flex justify-around gap-4">
        <dic class="p-float-label">
          <label for="student-event-calendar-filter">Date</label>
          <Calendar
            id="student-event-calendar-filter"
            inputId="range"
            v-model="dateFilter"
            selectionMode="range"
            :manualInput="false"
          />
        </dic>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            placeholder="Search"
            class="rounded-2"
            v-on:input="debounceInput"
          />
        </span>
      </div>
    </div>
    <div v-bind="containerProps" class="h-full mt-2 w-[95%]">
      <div v-bind="wrapperProps">
        <div v-for="item in list">
          <EventRow :event="item.data" />
        </div>
      </div>
      <div class="w-full flex justify-center">
        <ProgressSpinner
          class="mx-auto"
          v-if="fetching"
          style="width: 50px; height: 50px"
          strokeWidth="6"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ClubEvent,
  ClubEventStatusEnum,
  FindManyClubEventQueryVariables,
  useFindManyClubEventQuery,
} from "@apclub/graphql";
import { useDebounceFn, useInfiniteScroll, useVirtualList } from "@vueuse/core";
import { isEmpty } from "lodash";

const data = ref<ClubEvent[]>([]);

const debounceInput = useDebounceFn((e: Event) => {
  eventCursor.value = "";
  searchString.value = (e.target as any).value;
  data.value = []
}, 800);

const searchString = ref("");
const dateFilter = ref();
const hasNextPage = ref(true);
const eventCursor = ref("");
const fetchLimit = ref(25);

watch(dateFilter, () => {
  data.value = []
})

const { data: events, fetching } = useFindManyClubEventQuery({
  variables: computed((): FindManyClubEventQueryVariables => {
    return {
      where: {
        ...(!!searchString.value && {
          OR: [
            {
              name: {
                contains: searchString.value,
              },
            },
            {
              description: {
                contains: searchString.value,
              },
            },
          ],
        }),
        ...(!isEmpty(dateFilter.value) && {
          startAt: {
            gte: dateFilter.value[0],
            ...(!!dateFilter.value[1] && {lte: dateFilter.value[1],})
          }
        }),
        status: {
          notIn: [ClubEventStatusEnum.Cancelled, ClubEventStatusEnum.InReview],
        },
      },
      ...(!!eventCursor.value && {
        cursor: {
          id: eventCursor.value,
        },
        skip: 1,
      }),
      take: fetchLimit.value,
    };
  }),
});

watch(events, (newVal) => {
  if ((newVal?.findManyClubEvent.length ?? 0) < fetchLimit.value)
    hasNextPage.value = false;
  else hasNextPage.value = true;

  data.value = [
    ...data.value,
    ...((newVal?.findManyClubEvent as ClubEvent[]) ?? []),
  ];
});

const rowHeight = ref(130);

const onLoadMore = () => {
  if (!hasNextPage) return;
  eventCursor.value =
    events.value?.findManyClubEvent[
      events.value.findManyClubEvent.length - 1
    ].id!;
};

const { list, containerProps, wrapperProps } = useVirtualList(data, {
  itemHeight: rowHeight.value,
});
useInfiniteScroll(containerProps.ref, onLoadMore, {
  distance: rowHeight.value,
});


</script>
