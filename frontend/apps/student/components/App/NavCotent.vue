<template>
  <div>
    <ul v-if="contexts.length" class="flex gap-5">
      <li
        v-for="(context, index) in contexts"
        :key="index"
        @click="context.command"
        :class="context.class"
        class="hover:bg-gray-300 p-2 px-3 rounded transition duration-300 w-full"
      >
        <nuxt-link :event="context.to ? '' : 'click'" :to="context.to">
          <div class="flex items-center text-lg">
            <span>{{ context.label }}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from "primevue/menuitem";

export interface NavContentProps {
  expand: boolean;
}

const props = withDefaults(defineProps<NavContentProps>(), {
  expand: true,
});

const contexts = ref<MenuItem[]>([
  {
    label: "Clubs",
    to: "/clubs",
  },
  {
    label: "Events",
    to: "/events",
  },
]);
</script>

<style></style>
