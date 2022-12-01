<template>
  <div class="">
    <ul v-if="contexts.length">
      <li  v-for="(context, index) in contexts" :key="index" @click="context.command" :class="context.class" class="hover:bg-gray-300 p-2 px-3 rounded transition duration-300 w-full">
        <nuxt-link :event="context.to ? '' : 'click'" :to="context.to">
          <div class="flex items-center">
            <Icon v-if="context.icon" :name="context.icon" class="p-2 mr-2" size="40px"></Icon>
            <span>{{context.label}}</span>

          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from 'primevue/menuitem';

export interface NavContentProps {
  expand: boolean
}

const props = withDefaults(defineProps<NavContentProps>(), {
  expand: true
})


const contexts = ref<MenuItem[]>([
  {
    label: 'Clubs',
    to: '/clubs',
    icon: 'ph:users'
  },
  {
    label: "Members",
    to: "/members",
    icon: 'ph:users-three-light'
  },
  {
    label: "Events",
    to: "/events",
    icon: 'ph:calendar'
  },
])
</script>

<style>
</style>