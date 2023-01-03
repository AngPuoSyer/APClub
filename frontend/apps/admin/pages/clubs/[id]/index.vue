<template>
  <div class="container mt-5">
    <div>
      <h1 class="container-heading">{{ club?.findOneClub?.name }}</h1>
      <h2 class="container-sub">{{ club?.findOneClub?.label }}</h2>
    </div>
    <div>
      <TabView>
        <TabPanel header="Club">
          <ClubMainPanel
            :club="(club?.findOneClub as unknown as Club)"
            :loading="clubLoading"
          />
        </TabPanel>
        <TabPanel header="Admin">
          <ClubAdminPanel
            :admin="(admin?.findManyClubAdmin as unknown as ClubAdmin[])"
            :loading="adminLoading"
          />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Club,
  ClubAdmin,
  ClubAdminStatusEnum,
  useFindManyClubAdminQuery,
  useFindOneClubQuery,
} from "@apclub/graphql";
import { useAdminClubStore } from "~~/store";

const clubStore = useAdminClubStore();
const { data: club, fetching: clubLoading } = useFindOneClubQuery({
  variables: {
    where: {
      id: {
        equals: clubStore.selectedClub?.id as string
      }
    }
  },
});

const { data: admin, fetching: adminLoading } = useFindManyClubAdminQuery({
  variables: {
    where: {
      clubId: {
        equals: clubStore.selectedClub?.id as string,
      },
      clubAdminStatus: {
        equals: ClubAdminStatusEnum.Active,
      },
    },
  },
});
</script>
