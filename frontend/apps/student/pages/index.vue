<template>
  <div class="container">
    <ProgressBar class="my-16" v-if="displayFetching" mode="indeterminate" />
    <Carousel
      class="h-[30vh] lg:h-[40vh] w-full"
      v-else
      :value="display?.findManyClubEvent"
      :numVisible="1"
      :circular="true"
      :autoplay-interval="7000"
    >
      <template #header
        ><h2 class="text-3xl font-bold">Upcoming Events</h2></template
      >
      <template #item="slotProps">
        <div class="h-full w-full relative">
          <NuxtLink :to="`events/${slotProps.data.id}`">
            <NuxtImg
              class="mx-auto h-full w-full"
              :src="slotProps.data.thumbnail ?? '/apu-logo.png'"
              format="webp"
            />

            <div class="w-full bg-gray-800 h-[12%] bg-opacity-70 absolute bottom-0 flex items-center">
              <p class="text-white ml-2">{{ slotProps.data.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </template>
    </Carousel>

    <div class="grid-cols-2 gap-6 grid">
      <div class="col-span-1">
        <h3 class="text-2xl font-bold">My Clubs</h3>
        <div
          class="rounded-md w-full border-2 border-gray-500 h-[50vh] mt-2 overflow-y-auto"
        >
          <Skeleton
            class="my-5 w-[95%] mx-auto h-[64px]"
            v-if="clubFetching"
            v-for="a in 8"
          />
          <div
            class="w-[95%] my-5 line-clamp-1 ml-4"
            v-else-if="!clubFetching && clubs?.getMyClubs.length"
            v-for="club in clubs?.getMyClubs"
          >
            <NuxtLink class="mb-4" :to="`/clubs/${club.club.id}`">
              <div class="flex justify-between">
                <p class="text-2xl font-normal">
                  {{ club.club.name }},
                  <span class="text-xl text-gray-500">{{
                    club.club.label
                  }}</span>
                </p>
              </div>
            </NuxtLink>
            <hr class="mt-2 h-px border-t-2" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <h3 class="text-2xl font-bold">My Events</h3>
        <div
          class="rounded-md w-full border-2 border-gray-500 h-[50vh] mt-2 overflow-y-auto"
        >
          <Skeleton
            class="my-5 w-[95%] mx-auto h-[64px]"
            v-if="eventFetching"
            v-for="a in 8"
          />
          <div
            class="w-[95%] my-5 line-clamp-1 ml-4"
            v-else-if="!eventFetching && events?.getMyEvents.length"
            v-for="event in events?.getMyEvents"
          >
            <NuxtLink class="mb-4" :to="`/events/${event.event.id}`">
              <div class="flex justify-between items-center">
                <p class="text-2xl font-normal">
                  {{ event.event.name }},
                  <span class="text-xl text-gray-500">{{
                    event.event.club.label
                  }}</span>
                </p>
                <div class="flex justify-between items-center gap-4">
                  <InlineMessage :severity="statusSer[event.event.status]">{{
                    event.event.status
                  }}</InlineMessage>
                  <p>
                    {{
                      useDateFormat(event.event.startAt, "DD/MM hh:mmA").value
                    }}
                  </p>
                </div>
              </div>
            </NuxtLink>
            <hr class="mt-2 h-px border-t-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SortOrder, useFindManyClubEventQuery } from "@apclub/graphql";
import {
  ClubEventStatusEnum,
  useGetMyClubsQuery,
  useGetMyEventsQuery,
} from "@apclub/graphql";
import { useDateFormat } from "@vueuse/shared";
const { data: clubs, fetching: clubFetching } = useGetMyClubsQuery();
const { data: events, fetching: eventFetching } = useGetMyEventsQuery();
const { data: display, fetching: displayFetching } = useFindManyClubEventQuery({
  variables: {
    where: {
      startAt: {
        gte: new Date(),
      },
      memberOnly: {
        equals: false,
      },
    },
    take: 8,
    orderBy: [
      {
        startAt: SortOrder.Desc,
      },
    ],
  },
});
const statusSer = ref<any>({
  [ClubEventStatusEnum.Awaiting]: "info",
  [ClubEventStatusEnum.Ongoing]: "success",
});
</script>

<style scoped>
:deep .p-inline-message-icon {
  display: none;
}

:deep .p-carousel-content {
  height: 100%;
}
</style>
