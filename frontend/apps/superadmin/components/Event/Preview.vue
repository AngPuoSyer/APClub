<template>
  <div>
    <Toast />
    <div class="w-3/12 mb-6">
      <LazyEventAvatar
        :label="data?.findOneClubEvent.club.label!"
        :date="data?.findOneClubEvent.updatedAt"
        :loading="fetching"
      />
    </div>
    <div v-if="fetching">
      <Skeleton class="mb-6" width="80%" height="60px" />
      <Skeleton width="80%" height="60vh" />
    </div>
    <div v-else>
      <h1 class="container-heading mt-6">{{ data?.findOneClubEvent.name }}</h1>
      <LazyEventPreviewMd :text="data?.findOneClubEvent.description!" />
      <div class="flex flex-co justify-between items-center mt-12">
        <div class="w-1/2 text-center">
          <h4 class="font-semibold text-xl">Start At:</h4>
          <p class="text-lg">
            {{
              useDateFormat(data?.findOneClubEvent.startAt, "DD/MM/YYYY hh:mmA")
                .value
            }}
          </p>
        </div>
        <div class="w-1/2 text-center">
          <h4 class="font-semibold text-xl">End At:</h4>
          <p class="text-lg">
            {{
              useDateFormat(data?.findOneClubEvent.endAt, "DD/MM/YYYY hh:mmA")
                .value
            }}
          </p>
        </div>
      </div>
      <div
        v-if="data?.findOneClubEvent.status === ClubEventStatusEnum.InReview"
        class="flex flex-co justify-around items-center mt-12"
      >
        <Button
          label="Approve"
          type="button"
          icon="pi pi-check"
          class="p-button-success px-3 p-button-raised"
          :disabled="updating"
          @click="() => approveRequest(eventId, true)"
        />
        <Button
          label="Reject"
          type="button"
          icon="pi pi-times"
          class="p-button-danger px-6 p-button-raised"
          :disabled="updating"
          @click="() => approveRequest(eventId, false)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ClubEventStatusEnum,
  FindOneClubEventQueryVariables,
  useFindOneClubEventWithClubQuery,
  useUpdateClubEventMutation,
} from "@apclub/graphql";
import { useDateFormat } from "@vueuse/shared";
import { useToast } from "primevue/usetoast";

const props = defineProps<{
  eventId: string;
}>();

const toast = useToast();

const { eventId } = toRefs(props);

const { data, fetching } = useFindOneClubEventWithClubQuery({
  variables: computed(
    (): FindOneClubEventQueryVariables => ({
      where: {
        id: {
          equals: eventId.value,
        },
      },
    })
  ),
});

const md = ref(data.value?.findOneClubEvent.description ?? "");

watch(data, (newVal, oldVal) => {
  md.value = newVal?.findOneClubEvent.description!;
});

const { executeMutation, fetching: updating } = useUpdateClubEventMutation();

const approveRequest = async (eventId: string, approved: boolean) => {
  const { data, error } = await executeMutation({
    data: {
      status: {
        set: ClubEventStatusEnum.Awaiting,
      },
    },
    where: {
      id: eventId,
    },
  });
  if (error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: error.networkError ? error.networkError.message : error.message,
      life: 5000,
    });
  } else {
    toast.add({
      severity: "success",
      summary: data?.updateClubEvent.name,
      detail: `Event ${approved ? "Approved" : " Rejected"}`,
      life: 5000,
    });
  }
};
</script>
