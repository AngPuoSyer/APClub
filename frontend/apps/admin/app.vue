<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
  useRefreshTokenMutation,
} from "@apclub/graphql";
import { createClient, provideClient } from "@urql/vue";
import { useAuthStore } from "./store/auth.store";

const authStore = useAuthStore();
const client = createClient({
  url: process.env.BACKEND_URL || "http://localhost:8000/graphql",
  fetchOptions: () => {
    return {
      headers: { Authorization: `Bearer ${authStore.accessToken}` },
    };
  },
});
provideClient(client);

onMounted(async () => {
  document.addEventListener("beforeunload", () => {
    if (!authStore.rememberMe) authStore.logout();
  });
  if (authStore.refreshToken) {
    const { data, error } = await client
      .mutation<RefreshTokenMutation, RefreshTokenMutationVariables>(
        RefreshTokenDocument,
        { token: authStore.refreshToken }
      )
      .toPromise();
    if (!error) authStore.setAccessToken(data?.refreshToken ?? "");
    // if (error || !data?.refreshToken) navigateTo("/login");
  }
  if (!authStore.isLoggedIn) navigateTo("/login");
});
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
