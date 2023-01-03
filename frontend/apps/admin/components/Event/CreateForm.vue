<template>
  <div class="mt-4">
    <h4 class="text-lg font-semibold">Event</h4>
    <form @submit.prevent="submitEventCreate">
      <div class="w-10/12 grid grid-cols-7 gap-8 mt-6">
        <div class="col-span-5">
          <span class="p-float-label p-fluid">
            <InputText v-model="eventTitle" type="text"></InputText>
            <label>Title</label>
          </span>
        </div>
        <div class="col-span-2 flex justify-between items-center">
          <div class="flex gap-4 items-center w-full ">
            <InputSwitch v-model="memberOnly"></InputSwitch>
            <label class="text-gray-500">Members Only</label>
          </div>
        </div>
        <div class="col-span-3">
          <span class="p-float-label p-fluid">
            <Calendar
              v-model="eventStartDate"
              :show-time="true"
              hour-format="12"
              :manual-input="false"
              :min-date="add(new Date(), { days: 3})"
              date-format=""
            ></Calendar>
            <label>Start Date</label>
          </span>
        </div>
        <div class="col-span-1 mx-auto">
          <Icon
            name="ic:round-minus"
            class="mx-3rem text-gray-400"
            size="3rem"
          ></Icon>
        </div>
        <div class="col-span-3">
          <span class="p-float-label p-fluid">
            <Calendar
              v-model="eventEndDate"
              :show-time="true"
              hour-format="12"
              :min-date="eventStartDate ?? add(new Date(), { days: 3})"
            ></Calendar>
            <label>End Date</label>
          </span>
        </div>
        <div class="w-full p-fluid col-span-7">
          <span class="mb-4">
            <label class="text-gray-500">Description <span class="text-xs">(edit using markdown format)</span></label>
          </span>
          <md-editor
            v-model="eventDescription"
            language="en-US"
            :no-katex="true"
            :no-mermaid="true"
            class="mt-3"
          />
        </div>
      </div>
      <div class="w-10/12 mt-3 flex justify-end gap-3">
        <Button
          type="button"
          label="Cancel"
          icon="pi pi-times"
          class="p-button-danger p-button-outlined p-button-raised"
          @click="cancelCreate"
        />
        <Button
          type="submit"
          label="Submit"
          icon="pi pi-user-plus"
          class="p-button-raised"
          :loading="loading"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { add } from 'date-fns'


export type CreateEventPayload = {
  name: string;
  startDate: Date;
  endDate: Date;
  membersOnly: boolean
  description: string;
};

export type FormError = {
  field: string;
  message: string;
};

const props = defineProps<{
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: "error", payload: FormError[]): void;
  (e: "createEvent", payload: CreateEventPayload): void;
}>();

const eventTitle = ref("");
const eventDescription = ref("");
const eventStartDate = ref();
const eventEndDate = ref();
const memberOnly = ref(false)

const cancelCreate = () => {
  navigateTo("/events");
};

const rule = computed(() => {
  return {
    eventTitle: { required },
    eventDescription: { required },
    eventStartDate: { required },
    eventEndDate: { required },
  };
});



const v$ = useVuelidate(rule, {
  eventTitle,
  eventDescription,
  eventEndDate,
  eventStartDate
});

const submitEventCreate = () => {
  v$.value.$validate();
  if (v$.value.$error) {
    emit("error", [
      ...v$.value.eventTitle.$errors.map((a) => ({
        field: "Event Name",
        message: a.$message as string,
      })),
      ...v$.value.eventDescription.$errors.map((a) => ({
        field: "Event Label",
        message: a.$message as string,
      })),
      ...v$.value.eventStartDate.$errors.map((a) => ({
        field: "Event Start Date",
        message: a.$message as string,
      })),
      ...v$.value.eventEndDate.$errors.map((a) => ({
        field: "Event End Date",
        message: a.$message as string,
      })),
    ]);
    }
   else {
    emit("createEvent", {
      name: eventTitle.value,
      startDate: eventStartDate.value,
      endDate: eventEndDate.value,
      description: eventDescription.value,
      membersOnly: memberOnly.value
    });
  }
};
</script>

<style scoped>
:deep .p-button.p-autocomplete-dropdown {
  background-color: white;
  color: #6c757d;
  border-left: 0px;
  border-color: #ced4d9;
}
</style>
