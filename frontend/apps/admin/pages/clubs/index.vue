<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import { useAdminClubStore } from '~~/store';

onMounted(() => {
  const clubStore = useAdminClubStore()
  navigateTo(`/clubs/${clubStore.selectedClub?.id ?? ''}`)
})
</script>