<template>
  <div class="container">
    <LazyEventPreview :event-id="(eventId as string)"/>
  </div>
</template>
  
<script setup lang="ts">
const route = useRoute()
const eventId = ref(route.params.id)
</script>
