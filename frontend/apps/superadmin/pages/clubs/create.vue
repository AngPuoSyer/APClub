<template>
  <div class="container">
    <Toast />
    <div>
      <h1 class="container-heading">Clubs</h1>
      <h2 class="container-sub">Create Club</h2>
    </div>
    <LazyClubCreateForm
      @error="handleError"
      @create-club="createClub"
      :loading="fetching"
    />
  </div>
</template>

<script setup lang="ts">
import {
  ClubAdminCreateManyClubInput,
  useCreateOneClubMutation,
} from "@apclub/graphql";
import { useToast } from "primevue/usetoast";
import {
  CreateClubPayload,
  FormError,
} from "~~/components/Club/CreateForm.vue";

const toast = useToast();
const {
  executeMutation: clubCreate,
  fetching,
  error,
} = useCreateOneClubMutation();

const handleError = (payload: FormError[]) => {
  for (const err of payload) {
    toast.add({
      severity: "error",
      summary: err.field,
      detail: err.message,
      life: 5000,
    });
  }
};

const createClub = async (data: CreateClubPayload) => {

  const { error } = await clubCreate({
    data: {
      name: data.name,
      label: data.label,
      description: data.description,
      clubAdmin: {
        createMany: {
          data: data.admins.map<ClubAdminCreateManyClubInput>((admin) => {
            return {
              userId: admin.name.id,
              roleLabel: admin.label,
              role: admin.role,
            };
          }),
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
      summary: data.name,
      detail: "Club Created",
      life: 5000,
    });
    navigateTo('/clubs')
  }
};
</script>
