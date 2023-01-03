import { Club } from "@apclub/graphql";
import { defineStore } from "pinia";
import { StoreType } from "./type/store.type";

interface IAdminClubStore {
  clubs: Club[];
  selectedClub: Club | null;
}

export const useAdminClubStore = defineStore(StoreType.ADMIN_CLUB, {
  state: (): IAdminClubStore => ({
    clubs: [],
    selectedClub: null,
  }),
  persist: true,
  getters: {
    clubFetched: (state) => !!state.clubs.length,
  },
  actions: {
    setClubs(clubs: Club[]) {
      this.clubs = clubs;
    },
    selectClub(club: Club) {
      this.selectedClub = club;
    },
  },
});
