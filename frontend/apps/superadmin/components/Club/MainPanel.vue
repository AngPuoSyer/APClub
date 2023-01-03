<template>
  <div class="h-full w-full grid-cols-3 gap-4 grid">
    <div class="col-span-2">
      <Skeleton v-if="loading" width="100%" height="4rem"/>
      <div v-else>
        <h3 class="text-xl font-semibold">Name</h3>
        <p>{{ club.name }}</p>
      </div>
    </div>
    <div class="col-span-1">
      <Skeleton v-if="loading" width="100%" height="4rem"/>
      <div v-else>
        <h3 class="text-xl font-semibold">Label</h3>
        <p>{{ club.label }}</p>
      </div>
    </div>
    <div class="col-span-3">
      <Skeleton v-if="loading" width="100%" height="4rem"/>
      <div v-else>
        <h3 class="text-xl font-semibold">Description</h3>
        <p>{{ club.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Club } from "@apclub/graphql";

const props = defineProps<{
  club: Club;
  loading: boolean;
}>();

const { club, loading } = toRefs(props);

</script>
