<template>
  <div>
    <p>Easter Egg</p>
  </div>
</template>

<script setup lang="ts">
import { useAdminClubStore, useAuthStore } from '~~/store';

const authStore = useAuthStore()
const clubStore = useAdminClubStore()

onMounted(() => {
  if(authStore.isLoggedIn)
    return navigateTo(`clubs/${clubStore.selectedClub!.id}`)
  navigateTo('/login')
})
</script>