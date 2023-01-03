<template>
  <div>
    <Toast />
    <div class="flex justify-between items-center w-full">
      <div class="w-3/12 mb-6">
        <LazyEventAvatar
          :label="data?.findOneClubEvent.club.label!"
          :date="data?.findOneClubEvent.updatedAt"
          :loading="fetching"
        />
      </div>
      <Button
        v-if="!meFetching && !joined"
        class="mr-6 p-button-lg p-button-success p-button-raised"
        label="Join Event"
        @click="joinEvent"
      />
      <Button
        v-if="!meFetching && joined"
        class="mr-6 p-button-lg p-button-danger p-button-raised"
        label="Unjoin Event"
        @click="leaveEvent"
      />
    </div>
    <div v-if="fetching">
      <Skeleton class="mb-6" width="80%" height="60px" />
      <Skeleton width="80%" height="60vh" />
    </div>
    <div v-else>
      <h1 class="container-heading mt-6">{{ data?.findOneClubEvent.name }}</h1>
      <LazyEventPreviewMd :text="data?.findOneClubEvent.description!" />
      <div class="flex flex-co justify-between items-center mt-8">
        <div class="w-1/2 text-center">
          <h4 class="font-semibold text-xl">Start At:</h4>
          <p class="text-lg">
            {{
              useDateFormat(
                data?.findOneClubEvent.startAt,
                "DD/MM/YYYY hh:mmA"
              ).value
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
      <div class="flex justify-center mt-6 w-full mx-auto">
        <Button
          v-if="!meFetching && !joined"
          class="mr-6 p-button-lg p-button-success p-button-raised"
          label="Join Event"
          @click="joinEvent"
        />
        <Button
          v-if="!meFetching && joined"
          class="mr-6 p-button-lg p-button-danger p-button-raised"
          label="Unjoin Event"
          @click="leaveEvent"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FindOneClubEventQueryVariables,
  useFindOneClubEventWithClubQuery,
  useGetMeEventMemberQuery,
  useJoinClubEventMutation,
  useLeaveClubEventMutation,
} from "@apclub/graphql";
import { useDateFormat } from "@vueuse/shared";
import { useToast } from "primevue/usetoast";

const props = defineProps<{
  eventId: string;
}>();

const toast = useToast();
const { eventId } = toRefs(props);

const {
  data: eventMember,
  fetching: meFetching,
  executeQuery: getMember,
} = useGetMeEventMemberQuery({
  variables: {
    eventId: eventId.value,
  },
  requestPolicy: "network-only",
});
const joined = computed(() => !!eventMember.value?.getMeEventMember);

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

const { executeMutation: joinClubEventMutation } = useJoinClubEventMutation();
const { executeMutation: leaveClubEventMutation } = useLeaveClubEventMutation();

const joinEvent = async () => {
  const { error } = await joinClubEventMutation({
    eventId: eventId.value,
  });
  if (error)
    return toast.add({
      severity: "error",
      summary: "Join Event Failed",
      detail: error.networkError ? error.networkError.message : error.message,
      life: 5000,
    });
  toast.add({
    severity: "success",
    summary: data?.value?.findOneClubEvent.name,
    detail: "Successfully Join Event",
  });
  await getMember();
};

const leaveEvent = async () => {
  const { error } = await leaveClubEventMutation({
    eventId: eventId.value,
  });
  if (error)
    return toast.add({
      severity: "error",
      summary: "Join Event Failed",
      detail: error.networkError ? error.networkError.message : error.message,
      life: 5000,
    });
  toast.add({
    severity: "info",
    summary: data.value?.findOneClubEvent.name,
    detail: "Left Club Event",
  });
  await getMember();
};

const md = ref(data.value?.findOneClubEvent.description ?? "");

watch(data, (newVal, oldVal) => {
  md.value = newVal?.findOneClubEvent.description!;
});
</script>
