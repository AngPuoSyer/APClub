<template>
  <div>
    <Toast />
    <DynamicDialog />
    <div class="w-full flex justify-between items-center mb-6">
      <LazyEventAvatar
        :label="data?.findOneClubEvent.club.label!"
        :date="data?.findOneClubEvent.updatedAt"
        :loading="fetching"
      />
      <Button
        label="Attendees"
        class="p-button-help p-button-lg mr-4 p-button-raised"
        @click="showAttendees"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FindOneClubEventQueryVariables,
  useFindOneClubEventWithClubQuery,
} from "@apclub/graphql";
import { useDateFormat } from "@vueuse/shared";
import { useDialog } from "primevue/usedialog";
import Attendees from "./Attendees.vue";

const props = defineProps<{
  eventId: string;
}>();

const dialog = useDialog();
const showAttendees = () => {
  const dialogRef = dialog.open(Attendees, {
    props: {
      header: "Attendees",
      modal: true,
      closeOnEscape: true,
      dismissableMask: true,
      style: {
        width: "70vw",
      },
      breakpoints: {
        "768px": "95vw",
      },
    },
    data: {
      eventId: eventId
    }
  });
};

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
</script>
