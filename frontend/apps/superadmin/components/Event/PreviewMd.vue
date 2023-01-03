<template>
    <md-editor preview-only v-model="text" language="en-US" />
</template>

<script setup lang="ts">
import MdEditor from 'md-editor-v3'

const props = defineProps<{
  text: string;
}>()

const { text } = toRefs(props)
</script>

<style scoped lang="postcss">
:deep p {
  @apply text-xl
}

:deep h1 {
  @apply text-3xl font-semibold;
}
</style>