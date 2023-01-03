<template>
  <div class="container">
    <Toast />
    <div>
      <h1 class="container-heading">Events</h1>
      <h2 class="container-sub">
        Edit Event for
        <span class="font-bold text-black">{{
          clubStore.selectedClub?.name
        }}</span>
      </h2>
    </div>
    <!-- <LazyEventEditForm
      @error="handleError"
      @create-event="createEvent"
      :event-id="(eventId as string)"
      :loading="fetching"
    /> -->
  </div>
</template>

<script setup lang="ts">
import {
  useCreateClubEventMutation,
  useFindOneClubEventQuery,
} from "@apclub/graphql";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import {
  FormError,
} from "~~/components/Event/CreateForm.vue";
import { EditEventPayload } from "~~/components/Event/EditForm.vue";
import { useAdminClubStore } from "~~/store";

const toast = useToast();

const clubStore = useAdminClubStore();

const route = useRoute();
const eventId = ref(route.params.id);

const { executeMutation, data, fetching } = useCreateClubEventMutation();

const { data: event, fetching: eventFetching } = useFindOneClubEventQuery({
  variables: {
    where: {
      id: {
        equals: eventId.value as string,
      },
    },
  },
});

const handleError = (payload: FormError[]): void => {
  for (const err of payload) {
    toast.add({
      severity: "error",
      summary: err.field,
      detail: err.message,
      life: 5000,
    });
  }
};

const createEvent = async (data: EditEventPayload) => {
  const { error } = await executeMutation({
    data: {
      name: data.name!,
      description: data.description!,
      startAt: data.startDate,
      endAt: data.endDate,
      memberOnly: data.membersOnly,
      club: {
        connect: {
          id: clubStore.selectedClub!.id,
        },
      },
    },
  });
  if (error)
    toast.add({
      severity: "error",
      summary: error.name,
      detail: error.message,
      life: 5000,
    });
  else {
    toast.add({
      severity: "success",
      detail: data.name,
      summary: "Event Created",
      life: 5000,
    });
    navigateTo("/events");
  }
};
</script>
