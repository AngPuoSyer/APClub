<template>
  <div class="h-screen flex flex-row items-center justify-center align-center">
    <Toast />
    <AuthLoginBox
      @login-event="login"
      :loading="fetching"
      :error="Boolean(error)"
    ></AuthLoginBox>
  </div>
</template>

<script setup lang="ts">
import { LoginPayload } from "~~/components/Auth/LoginForm.vue";
import {
  Club,
  useGetMeQuery,
  useLoginUserMutation,
  User,
} from "@apclub/graphql";
import { useToast } from "primevue/usetoast";
import { useAdminClubStore, useAuthStore } from "~~/store";
import Toast from "primevue/toast";

definePageMeta({
  layout: false,
});

const authStore = useAuthStore();
const clubStore = useAdminClubStore();
const toast = useToast();

const { data, executeMutation, fetching, error } = useLoginUserMutation();
const { data: admin, executeQuery: getMeQuery } = useGetMeQuery({
  pause: true,
});

const login = async ({ email, password, rememberMe }: LoginPayload) => {
  const { data, error } = await executeMutation({
    data: {
      email,
      password,
    },
  });
  if (!error) {
    authStore.setAccessToken(data?.loginUser?.accessToken!);
    authStore.setRefreshToken(data?.loginUser?.refreshToken!)
    authStore.setRememberMe(rememberMe);
    toast.add({
      severity: "success",
      summary: "Login Successfully",
      life: 5000,
    });
    const user = await getMeQuery()
    authStore.setUser(user.data.value?.getMe as User);
    navigateTo(`/`);
  } else {
    toast.add({
      severity: "error",
      summary: "Login Failed",
      detail: error.networkError
        ? error.networkError.message
        : "Invalid Credentials",
      life: 5000,
    });
  }
};
</script>
