import { useAuthStore } from "~~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (!authStore.accessToken && !from.path.includes("/login"))
    navigateTo("/login");
});
