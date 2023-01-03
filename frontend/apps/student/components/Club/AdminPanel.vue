<template>
  <div class="w-full">
    <Skeleton
      v-if="loading"
      :loading="loading"
      width="100%"
      height="4rem"
    />
    <OrganizationChart v-else :value="chartData" :collapsible="false" selection-mode="single">
      <template #default="slotProps">
        <div>
          <h5 class="font-semibold">{{( slotProps.node.data as ClubAdmin).roleLabel }}</h5>
          <hr class="bg-gray-500 my-1 w-full d"/>
          {{( slotProps.node.data as ClubAdmin).user.username}}
        </div>
      </template>
  
    </OrganizationChart>
  </div>
</template>

<script setup lang="ts">
import { ClubAdmin, ClubAdminRoleEnum } from "@apclub/graphql";

import { AdminTree } from "~~/utils/adminTree";

const props = defineProps<{
  admin: ClubAdmin[] | undefined;
  loading: boolean;
}>();

const { admin, loading } = toRefs(props);


const chartData = computed(() => {
  const adminSortValue: any = {
    [ClubAdminRoleEnum.President]: { sort: 7, parent: null },
    [ClubAdminRoleEnum.VicePresident]: {
      sort: 6,
      parent: ClubAdminRoleEnum.President,
    },
    [ClubAdminRoleEnum.Secretary]: {
      sort: 5,
      parent: ClubAdminRoleEnum.VicePresident,
    },
    [ClubAdminRoleEnum.Treasurer]: {
      sort: 5,
      parent: ClubAdminRoleEnum.VicePresident,
    },
    [ClubAdminRoleEnum.AssistantSecretary]: {
      sort: 4,
      parent: ClubAdminRoleEnum.Secretary,
    },
    [ClubAdminRoleEnum.AssistantTreasurer]: {
      sort: 4,
      parent: ClubAdminRoleEnum.Treasurer,
    },
    [ClubAdminRoleEnum.Commitee]: {
      sort: 3,
      parent: ClubAdminRoleEnum.Commitee,
    },
  };

  const admins = (admin.value as ClubAdmin[]).sort((a, b) => {
    return adminSortValue[b.role].sort - adminSortValue[a.role].sort;
  });


  let data: AdminTree<ClubAdmin> | undefined;
  for (let i = 0; i < admins.length; i++) {
    if (i === 0) {
      data = new AdminTree(admins[i].id, admins[i]);
      continue;
    }
    let commiteeAdded = false;
    data?.addToParent(admins[i].id, admins[i], (a) => {
      if (admins[i].role === ClubAdminRoleEnum.Commitee && !commiteeAdded) {
        commiteeAdded = true;
        return a.role === ClubAdminRoleEnum.VicePresident;
      }
      return a.role === adminSortValue[admins[i].role].parent;
    });
  }
  return data;
});
</script>
