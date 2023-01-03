<template>
  <Toast />
  <div class="container mt-5">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="container-heading">{{ club?.findOneClub?.name }}</h1>
        <h2 class="container-sub">{{ club?.findOneClub?.label }}</h2>
      </div>
      <div class="mr-6">
        <Button
          v-if="!memberFetching && isMember"
          class="p-button-success p-button-lg p-button-raised"
          label="Join Club"
          @click="joinClub"
        />
        <Button
          v-else-if="!memberFetching && !isMember"
          class="p-button-danger p-button-lg p-button-raised"
          label="Leave Club"
          @click="leaveClub"
        />
      </div>
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
  FindManyClubAdminQueryVariables,
  FindManyClubQueryVariables,
  GetMeMemberQueryVariables,
  useGetMeMemberQuery,
  useJoinClubMutation,
  useLeaveClubMutation,
} from "@apclub/graphql";
import {
  Club,
  ClubAdmin,
  ClubAdminStatusEnum,
  useFindManyClubAdminQuery,
  useFindOneClubQuery,
} from "@apclub/graphql";
import { useToast } from "primevue/usetoast";

const route = useRoute();
const clubId = ref(route.params.id as string);
const toast = useToast();

// TODO: do events

watch(
  () => route.params.id,
  (newVal, oldVal) => {
    clubId.value = newVal as string;
  }
);

const { executeMutation: joinClubMutation } = useJoinClubMutation();
const { executeMutation: leaveClubMutation } = useLeaveClubMutation();

const joinClub = async () => {
  const { data, error } = await joinClubMutation({
    clubId: clubId.value,
  });
  if (error)
    return toast.add({
      severity: "error",
      summary: "Join Club Failed",
      detail: error.networkError ? error.networkError.message : error.message,
      life: 5000,
    });
  toast.add({
    severity: "success",
    summary: club.value?.findOneClub.name,
    detail: "Successfully Join Club",
  });
  await getMember();
};

const leaveClub = async () => {
  const { data, error } = await leaveClubMutation({
    clubId: clubId.value,
  });
  if (error)
    return toast.add({
      severity: "error",
      summary: "Join Club Failed",
      detail: error.networkError ? error.networkError.message : error.message,
      life: 5000,
    });
  toast.add({
    severity: "info",
    summary: club.value?.findOneClub.name,
    detail: "Left Club",
  });
  await getMember();
};

const { data: club, fetching: clubLoading } = useFindOneClubQuery({
  variables: computed(
    (): FindManyClubQueryVariables => ({
      where: {
        id: {
          equals: clubId.value,
        },
      },
    })
  ),
});

const { data: admin, fetching: adminLoading } = useFindManyClubAdminQuery({
  variables: computed(
    (): FindManyClubAdminQueryVariables => ({
      where: {
        clubId: {
          equals: clubId.value,
        },
        clubAdminStatus: {
          equals: ClubAdminStatusEnum.Active,
        },
      },
    })
  ),
});

const {
  data: member,
  fetching: memberFetching,
  executeQuery: getMember,
} = useGetMeMemberQuery({
  variables: computed(
    (): GetMeMemberQueryVariables => ({
      clubId: clubId.value,
    })
  ),
  requestPolicy: "cache-and-network",
});

const isMember = computed(() => !member.value?.getMeMember);
</script>
