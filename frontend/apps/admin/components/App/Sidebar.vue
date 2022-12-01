<template>
  <div
    class="sidebar top-0 bottom-0 lg:left-0 p-2 w-auto overflow-y-auto border-l border-gray-300 pr-3 pl-5 h-screen border"
  >
    <div class="flex flex-col justify-between h-full">
      <div>
        <NuxtImg src="/apu-logo.png" format="webp" class="my-4" width="300" />
        <AppNavContent />
      </div>
      <div class="border-t border-gray-300">
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
          <div class="ml-4">Super Admin</div>
          <Menu id="superadmin-overlay-menu" ref="superadminMenuToggle" :model="superadminMenuItems" :popup="true"></Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~~/store/auth.store";

const authStore = useAuthStore();

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
</script>

<style></style>
