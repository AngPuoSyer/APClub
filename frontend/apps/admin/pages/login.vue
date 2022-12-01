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
import { useLoginClubAdminMutation } from "@apclub/graphql";
import { useAuthStore } from "~~/store/auth.store";
import { useToast } from "primevue/usetoast";

definePageMeta({
  layout: false,
});

const authStore = useAuthStore();
const toast = useToast();

const { data, executeMutation, fetching, error } = useLoginClubAdminMutation();

const login = async ({ email, password, rememberMe }: LoginPayload) => {
  const { data, error } = await executeMutation({
    data: {
      email,
      password,
    },
  });
  if (!error) {
    console.log(data);
    authStore.setAccessToken(data?.loginClubAdmin?.accessToken!);
    authStore.setRememberMe(rememberMe);
    navigateTo("clubs");
    toast.add({
      severity: "sucess",
      summary: "Login Successfully",
      life: 5000,
    });
  } else {
    toast.add({
      severity: "error",
      summary: "Login Failed",
      detail: error.networkError
        ? error.networkError.message
        : "Invalid Credentials",
      life: 5000,
    });
    console.log(error);
  }
};
</script>
