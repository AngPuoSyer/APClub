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

const route = useRoute();
const clubId = ref(route.params.id as string);

watch(() => route.params.id, (newVal, oldVal) => {
  clubId.value = newVal as string;
});

const { data: club, fetching: clubLoading } = useFindOneClubQuery({
  variables: computed(() => {
    return {
      where: {
        id: {
          equals: clubId.value,
        },
      },
    };
  }),
});

const { data: admin, fetching: adminLoading } = useFindManyClubAdminQuery({
  variables: computed(() => {
    return {
      where: {
        clubId: {
          equals: clubId.value,
        },
        clubAdminStatus: {
          equals: ClubAdminStatusEnum.Active,
        },
      },
    };
  }),
});
</script>
