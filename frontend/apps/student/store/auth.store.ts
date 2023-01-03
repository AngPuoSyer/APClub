import { User } from "@apclub/graphql";
import { defineStore } from "pinia";
import { StoreType } from "./type/store.type";

interface IAuthStore {
  accessToken: string;
  rememberMe: boolean;
  user: User | null;
  refreshToken: string;
}

export const useAuthStore = defineStore(StoreType.AUTH, {
  state: (): IAuthStore => ({
    accessToken: "",
    rememberMe: false,
    user: null,
    refreshToken: "",
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
    setRefreshToken(refreshToken: string) {
      this.refreshToken = refreshToken;
    },
    setRememberMe(data: boolean) {
      this.rememberMe = data;
    },
    setUser(user: User) {
      this.user = user;
    },
    logout() {
      this.accessToken = "";
      this.rememberMe = false;
      this.user = null;
      this.refreshToken = "";
    },
  },
});
