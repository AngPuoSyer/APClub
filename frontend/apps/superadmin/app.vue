<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { createClient, provideClient } from '@urql/vue';
import { useAuthStore } from './store/auth.store';

const authStore = useAuthStore()
const client = createClient({
  url: 'http://localhost:8000/graphql',
  fetchOptions: () => {
    return {
      headers: { Authorization: `Bearer ${authStore.accessToken}`},
    };
  },
});
provideClient(client)

onMounted(() => {
  document.addEventListener('beforeunload', () => {
    if(!authStore.rememberMe) authStore.logout()
  })

})
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow-y: hidden;
}
</style>