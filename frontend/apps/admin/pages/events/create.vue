<template>
  <div class="container">
    <Toast />
    <div>
      <h1 class="container-heading">Events</h1>
      <h2 class="container-sub">
        Create Event for
        <span class="font-bold text-black">{{
          clubStore.selectedClub?.name
        }}</span>
      </h2>
    </div>
    <LazyEventCreateForm
      @error="handleError"
      @create-event="createEvent"
      :loading="fetching"
    />
  </div>
</template>

<script setup lang="ts">
import { useCreateClubEventMutation } from "@apclub/graphql";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { useAdminClubStore } from "~~/store";
import {
  FormError,
  CreateEventPayload,
} from "../../components/Event/CreateForm.vue";

const toast = useToast();

const clubStore = useAdminClubStore();

const { executeMutation, data, fetching } = useCreateClubEventMutation();

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

const createEvent = async (data: CreateEventPayload) => {
  const { error } = await executeMutation({
    data: {
      name: data.name,
      description: data.description,
      startAt: data.startDate,
      endAt: data.endDate,
      memberOnly: data.membersOnly,
      club: {
        connect: {
          id: clubStore.selectedClub!.id
        }
      }
    }
  })
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
