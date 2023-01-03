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
  useGetClubsByAdminQuery,
  useGetMeQuery,
  useLoginClubAdminMutation,
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

const { data, executeMutation, fetching, error } = useLoginClubAdminMutation();
const { data: admin, executeQuery: getMeQuery } = useGetMeQuery({
  pause: true,
});
const { executeQuery: getClubsByAdminQuery } = useGetClubsByAdminQuery({
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
    authStore.setAccessToken(data?.loginClubAdmin?.accessToken!);
    authStore.setRememberMe(rememberMe);
    toast.add({
      severity: "sucess",
      summary: "Login Successfully",
      life: 5000,
    });
    const [admin, club] = await Promise.all([
      getMeQuery(),
      getClubsByAdminQuery(),
    ]);
    authStore.setUser(admin.data.value?.getMe as User)
    clubStore.setClubs(club.data.value?.getClubsByAdmin as Club[])
    clubStore.selectClub(club.data.value?.getClubsByAdmin[0] as Club)
    navigateTo(`clubs/${clubStore.selectedClub?.id} ?? ''`);
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
