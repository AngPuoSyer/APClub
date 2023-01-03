<template>
  <div class=" grid grid-rows-2 grid-cols-4 grid-flow-col" :class="{
    'gap-3': loading
  }">
    <div class="row-span-2 col-span-1 block">
      <Skeleton v-if="loading" shape="circle" height="100%"></Skeleton>
      <Avatar v-else size="large" label="C" shape="circle"/>
    </div>
    <div class="col-span-3 row-span-1 text-gray-600">
      <Skeleton v-if="loading"/>
      <h5 v-else>{{ label }}</h5>
    </div>
    <div class="col-span-3 row-span-1 text-gray-600">
      <Skeleton v-if="loading"/>
      <h5 v-else>{{ useDateFormat(date,'DD MMM YYYY, ddd' ).value }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/shared';

const props = defineProps<{
  label: string;
  date: Date;
  loading: boolean;
}>();

const { label, date, loading } = toRefs(props)
</script>
