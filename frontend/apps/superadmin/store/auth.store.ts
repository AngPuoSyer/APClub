import { defineStore } from "pinia";
import { StoreType } from "./type/store.type";

export const useAuthStore = defineStore(StoreType.AUTH, {
  state: () => ({
    accessToken: "",
    rememberMe: false,
  }),
  persist: true,
  getters: {
    isLoggedIn: (state) => {
      return Boolean(state.accessToken);
    },
  },
  actions: {
    setAccessToken(accessToken: string) {
      this.accessToken = accessToken;
    },
    setRememberMe(data: boolean) {
      this.rememberMe = data;
    },
    logout() {
      this.accessToken = "";
      this.rememberMe = false;
    },
  },
});
