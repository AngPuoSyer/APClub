<template>
  <div>
    <NuxtLink :to="`/clubs/${club.id}`">
      <Card class="w-full md:h-[55vh]">
        <template #header>
          <NuxtImg
            :src="club.logo || '/apu-icon.png'"
            format="webp"
            class="my-4"
            width="300px"
            fit="fill"
          />
        </template>
        <template #title>
          {{ club.label }}
        </template>
        <template #subtitle>
          {{ club.name }}
        </template>
        <template #content>
          {{ club.description.length > 60 ? club.description.slice(0, 60).concat(" .....") : club.description.slice(0, 60)}}
        </template>
      </Card>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Club } from "@apclub/graphql";

const props = defineProps<{
  club: Omit<Club, "_count">;
}>();

const { club } = toRefs(props);
</script>

<style>
:deep .p-card-subtitle {
  white-space: nowrap !important; 
}
</style>