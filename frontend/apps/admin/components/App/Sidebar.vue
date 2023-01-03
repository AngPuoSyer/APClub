<template>
  <div
    class="sidebar top-0 bottom-0 lg:left-0 p-2 w-auto overflow-y-auto border-l border-gray-300 pr-3 pl-5 h-screen border"
  >
    <div class="flex flex-col justify-between h-full">
      <div>
        <NuxtImg src="/apu-logo.png" format="webp" class="my-4" width="300" />
        <AppNavCotent />
      </div>
      <div class="">
        <span class="p-float-label">
          <Dropdown v-if="clubStore.clubFetched" :options="clubStore.clubs" option-label="label" v-model="clubStore.selectedClub" class="mt-4 w-full" @change="onSelectClub"/>
          <label>Club</label>
        </span>
        <div
          class="mt-2 pl-2 flex items-center justify-content py-2 hover:bg-gray-300 rounded transition duration-300"
          @click="toggleSuperadminMenu"
          aria-haspopup="true"
          aria-controls="superadmin-overlay-menu"
        >
          <Avatar
            icon="pi pi-user"
            class="mr-2 bottom-px"
            size="large"
            shape="circle"
          />
          <div class="ml-4">{{ authStore.user?.username ?? 'Admin'}}</div>
          <Menu id="superadmin-overlay-menu" ref="superadminMenuToggle" :model="superadminMenuItems" :popup="true"></Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAdminClubStore } from "~~/store";
import { useAuthStore } from "~~/store/auth.store";

const authStore = useAuthStore();
const clubStore = useAdminClubStore()

const superadminMenuToggle = ref<any>();

const toggleSuperadminMenu = (e: any) => {
  superadminMenuToggle.value.toggle(e)
};

const superadminMenuItems = ref([
  {
    label: "Logout",
    icon: "pi pi-sign-out",
    command: () => {
      authStore.logout();
      navigateTo("/login");
    },
  },
]);

const onSelectClub = (e: any) => {
  navigateTo(`/clubs/${e.value.id}`)
}

</script>

<style></style>
