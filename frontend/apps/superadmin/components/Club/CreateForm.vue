<template>
  <div class="mt-4">
    <h4 class="text-lg font-semibold">Club</h4>
    <form @submit.prevent="submitAdminCreate">
      <div class="w-10/12 grid grid-cols-8 gap-8 mt-6">
        <div class="col-span-6">
          <span class="p-float-label p-fluid">
            <InputText id="clubName" v-model="clubName" type="text"></InputText>
            <label for="clubName">Name</label>
          </span>
        </div>
        <div class="col-span-2">
          <span class="p-float-label w-full p-fluid">
            <InputText
              id="clubLabel"
              v-model="clubLabel"
              type="text"
              v-tooltip.right.focus="{
                value: 'Short Form Label For Your Club',
                class: 'text-sm',
              }"
            ></InputText>
            <label for="clubLabel">Label</label>
          </span>
        </div>
        <div class="p-float-label w-full p-fluid col-span-8">
          <Textarea
            id="clubDescription"
            v-model="clubDescription"
            auto-resize
          />
          <label for="clubDescrption">Description</label>
        </div>
      </div>
      <h4 class="text-lg font-semibold mt-4">Club Admins</h4>
      <div class="w-10/12 mt-6">
        <div
          v-for="(admin, index) in adminInput"
          class="grid grid-cols-10 gap-4 mb-8"
        >
          <div class="col-span-3">
            <span class="p-float-label p-fluid">
              <AutoComplete
                v-model="admin.name"
                :suggestions="userSelectionData?.findManyUser"
                force-selection
                @complete="completeUserSelection"
                :dropdown="true"
                option-label="username"
                :delay="800"
                :virtual-scroller-options="{
                  itemSize: 30,
                }"
              ></AutoComplete>
              <label>Name</label>
            </span>
          </div>
          <div class="col-span-3">
            <span class="p-float-label p-fluid">
              <Dropdown
                v-model="admin.role"
                :options="adminRoleOptions"
                option-label="name"
                option-value="value"
                @change="labelChange(admin)"
              ></Dropdown>
              <label>Role</label>
            </span>
          </div>
          <div class="col-span-3">
            <span class="p-float-label p-fluid">
              <InputText
                v-model="admin.label"
                type="text"
                :disabled="labelCheck(admin)"
              ></InputText>
              <label>Label</label>
            </span>
          </div>
          <div class="col-span-1">
            <Button
              class="p-button-danger p-button-raised"
              icon="pi pi-minus"
              @click="removeAdmin(index)"
            ></Button>
          </div>
        </div>
        <Button
          label="Add"
          icon="pi pi-plus"
          @click="newAdmin"
          class="p-button-raised"
        />
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
import {
  ClubAdminRoleEnum,
  GetUserSelectionsQueryVariables,
  QueryMode,
  useGetUserSelectionsQuery,
} from "@apclub/graphql";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { isEmpty } from "lodash";

export type ClubAdminInputType = {
  name: {
    typename: string;
    username: string;
    id: string;
  };
  role: ClubAdminRoleEnum;
  label: string;
};

export type CreateClubPayload = {
  name: string;
  label: string;
  description: string;
  admins: ClubAdminInputType[];
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
  (e: "createClub", payload: CreateClubPayload): void;
}>();

const adminInput = ref<ClubAdminInputType[]>([
  {
    name: {
      typename: "",
      id: "",
      username: "",
    },
    role: ClubAdminRoleEnum.President,
    label: "President",
  },
  {
    name: {
      typename: "",
      id: "",
      username: "",
    },
    role: ClubAdminRoleEnum.VicePresident,
    label: "Vice President",
  },
  {
    name: {
      typename: "",
      id: "",
      username: "",
    },
    role: ClubAdminRoleEnum.Secretary,
    label: "Secretary",
  },
  {
    name: {
      typename: "",
      id: "",
      username: "",
    },
    role: ClubAdminRoleEnum.Treasurer,
    label: "Treasurer",
  },
]);

const adminRoleOptions = ref([
  { name: "President", value: ClubAdminRoleEnum.President },
  { name: "Vice President", value: ClubAdminRoleEnum.VicePresident },
  { name: "Secretary", value: ClubAdminRoleEnum.Secretary },
  { name: "Treasurer", value: ClubAdminRoleEnum.Treasurer },
  { name: "Assistant Secretary", value: ClubAdminRoleEnum.AssistantSecretary },
  { name: "Assistant Treasurer", value: ClubAdminRoleEnum.AssistantTreasurer },
  { name: "Committee", value: ClubAdminRoleEnum.Commitee },
]);

const clubName = ref("");
const clubLabel = ref("");
const clubDescription = ref("");
const nameSearchString = ref("");

const { data: userSelectionData, executeQuery: userSelectionQuery } =
  useGetUserSelectionsQuery({
    variables: computed<GetUserSelectionsQueryVariables>(() => ({
      where: {
        username: {
          mode: QueryMode.Insensitive,
          contains: nameSearchString.value,
        },
      },
    })),
  });

const completeUserSelection = async (e: any) => {
  nameSearchString.value = e.query;
};

const labelCheck = (admin: ClubAdminInputType) => {
  return admin.role !== ClubAdminRoleEnum.Commitee;
};

const newAdmin = () => {
  adminInput.value.push({
    name: {
      typename: "",
      id: "",
      username: "",
    },
    role: ClubAdminRoleEnum.Commitee,
    label: "",
  });
};

const removeAdmin = (index: number) => {
  adminInput.value.splice(index, 1);
};

const labelChange = (admin: ClubAdminInputType) => {
  switch (admin.role) {
    case ClubAdminRoleEnum.President:
      return (admin.label = "President");
      break;
    case ClubAdminRoleEnum.VicePresident:
      return (admin.label = "Vice President");
      break;
    case ClubAdminRoleEnum.Secretary:
      return (admin.label = "Secretary");
      break;
    case ClubAdminRoleEnum.Treasurer:
      return (admin.label = "Treasurer");
      break;
    case ClubAdminRoleEnum.AssistantSecretary:
      return (admin.label = "Assistant Secretary");
      break;
    case ClubAdminRoleEnum.AssistantTreasurer:
      return (admin.label = "Assistant Treasurer");
      break;
    case ClubAdminRoleEnum.Commitee:
      return (admin.label = "");
      break;
  }
};

const cancelCreate = () => {
  navigateTo("/clubs");
};

const rule = computed(() => {
  return {
    clubName: { required },
    clubLabel: { required },
    clubDescription: { required },
    adminInput: {
      adminInputRequiredRoleValidation: helpers.withMessage(
        "Key Admin Roles Empty",
        adminInputRequiredRoleValidation
      ),
      adminInputDuplicateRoleValidation: helpers.withMessage(
        "Duplicate Key Admin Roles",
        adminInputDuplicateRoleValidation
      ),
      adminInputNameLabelValidation: helpers.withMessage(
        "Empty Admin Name or Label",
        adminInputNameLabelValidation
      ),
      adminInputDuplicateNameValidation: helpers.withMessage(
        "Duplicate Admin",
        adminDuplicateNameValidation
      ),
    },
  };
});
const payload = computed(() => {
  return {
    clubName,
    clubLabel,
    clubDescription,
    adminInput,
  };
});

const adminInputNameLabelValidation = (values: ClubAdminInputType[]) => {
  for (const value of values) {
    if (!value.name || !value.label) return false;
  }
  return true;
};

const adminDuplicateNameValidation = (values: ClubAdminInputType[]) => {
  const filtered = values.filter((a) => a.name).map((a) => a.name);
  return isEmpty(
    filtered.filter((item, index) => filtered.indexOf(item) !== index)
  );
};

const adminInputRequiredRoleValidation = (values: ClubAdminInputType[]) => {
  const requiredRoles = [
    ClubAdminRoleEnum.President,
    ClubAdminRoleEnum.VicePresident,
    ClubAdminRoleEnum.Secretary,
    ClubAdminRoleEnum.Treasurer,
  ];
  return requiredRoles.every((v) => values.some((a) => a.role === v));
};

const adminInputDuplicateRoleValidation = (values: ClubAdminInputType[]) => {
  const filtered = values
    .filter((item) => item.role !== ClubAdminRoleEnum.Commitee)
    .map((a) => a.role);
  return isEmpty(
    filtered.filter((item, index) => filtered.indexOf(item) !== index)
  );
};

const v$ = useVuelidate(rule, {
  clubName,
  clubLabel,
  clubDescription,
  adminInput,
});

const submitAdminCreate = () => {
  v$.value.$validate();
  if (v$.value.$error) {
    emit("error", [
      ...v$.value.clubName.$errors.map((a) => ({
        field: "Club Name",
        message: a.$message as string,
      })),
      ...v$.value.clubLabel.$errors.map((a) => ({
        field: "Club Label",
        message: a.$message as string,
      })),
      ...v$.value.clubDescription.$errors.map((a) => ({
        field: "Club Description",
        message: a.$message as string,
      })),
      ...v$.value.adminInput.$errors.map((a) => ({
        field: "Admin",
        message: a.$message as string,
      })),
    ]);
  } else {
    emit("createClub", {
      name: clubName.value,
      label: clubLabel.value,
      description: clubDescription.value,
      admins: adminInput.value,
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
