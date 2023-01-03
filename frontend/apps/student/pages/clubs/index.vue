<template>
  <div class="container">
    <div class="flex justify-between">
      <h1 class="container-heading">Clubs</h1>
      <div class="mr-12">
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
    <div class="w-[95%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-4">
      <Skeleton
        v-for="n in 8"
        v-if="fetching"
        class="col-span-1"
        height="40vh"
        width="100%"
      />

      <ClubCard
        v-else
        v-for="club in clubs?.findManyClub"
        :club="club"
        class="col-span-1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FindManyClubQueryVariables,
  useFindManyClubQuery,
} from "@apclub/graphql";
import { useDebounceFn } from "@vueuse/shared";

const searchString = ref("");

const findManyClubQueryVariable = computed((): FindManyClubQueryVariables => {
  return {
    where: {
      OR: [
        {
          name: {
            contains: searchString.value,
          },
        },
        {
          label: {
            contains: searchString.value,
          },
        },
        {
          description: {
            contains: searchString.value,
          },
        },
      ],
    },
  };
});

const { data: clubs, fetching } = useFindManyClubQuery({
  variables: findManyClubQueryVariable,
});

const debounceInput = useDebounceFn((e: Event) => {
  searchString.value = (e.target as any).value;
}, 800);
</script>
