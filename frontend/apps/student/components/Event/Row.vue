<template>
  <div class="h-[100px] mt-[20px] w-full">
    <nuxt-link :to="`/events/${event.id}`">
      <div class="flex justify-between">
        <h3 class="text-2xl font-semibold line-clamp-1">{{ event.name }}<span class="font-normal text-gray-500 text-base">, {{ event.club.label }}</span></h3>
        <p class="text-md md:text-lg mr-4">
          {{ useDateFormat(event.startAt, "DD/MM/YY hh:mmAA").value }}
        </p>
      </div>
      <div class="line-clamp-3 mb-[10px] text-gray-500">
        {{ mdTextParser(event.description) }}
      </div>
      <hr />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ClubEvent } from "@apclub/graphql";
import { useDateFormat } from "@vueuse/shared";

const props = defineProps<{
  event: ClubEvent;
}>();
const { event } = toRefs(props);
</script>
