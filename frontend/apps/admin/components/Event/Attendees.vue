<template>
  <div>
    <Toast></Toast>
    <DataTable
      @page="onPage"
      @sort="onSort"
      editMode="row"
      v-model:rows="limit"
      :lazy="true"
      :total-records="count?.countTotalEventMember ?? 0"
      :value="data?.findManyEventMember ?? []"
      :paginator="true"
      class="p-datatable-sm"
      dataKey="id"
      :rowHover="true"
      filterDisplay="menu"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 25, 50]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} clubs"
      loading-icon="pi pi-spinner"
      responsiveLayout="scroll"
      removable-sort
      ref="dtref"
    >
      <template #header>
        <div class="flex justify-between items-center py-1">
          <h3 class="m-0 text-xl">Members</h3>
          <div class="flex gap-2 items-center">
            <Button
              class="p-button-raised p-button-text p-button-plain"
              icon="pi pi-refresh"
              @click="refreshTable"
            />
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                placeholder="Search"
                class="rounded-2"
                v-on:input="debounceInput"
                :model-value="searchString"
              />
            </span>
            <Button
              label="Export"
              icon="pi pi-upload"
              class="p-button-secondary p-button-sm p-button-raised"
              @click="exportCSV"
            />
          </div>
        </div>
      </template>
      <Column field="user.username" header="Name">
        <template #body="{ data }">
          <Skeleton class="my-3" v-if="fetching && eventMemberTotalFetching" />
          <NuxtLink v-else :to="`events/${data.id}`">
            <span>{{ data.user.username }}</span>
          </NuxtLink>
        </template>
      </Column>
      <Column field="createdAt" header="Sign Up At" :sortable="true">
        <template #body="{ data }">
          <Skeleton class="my-3" v-if="fetching && eventMemberTotalFetching" />
          <span v-else>
            {{ useDateFormat(data.createdAt, "DD/MM/YYYY HH:mmA").value }}
          </span>
        </template>
      </Column>
      <Column field="attendance" header="Attendance" :sortable="true">
        <Dropdown
          :options="attendanceOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Select a Status"
        ></Dropdown>
        <template #body="{ data }">
          <Skeleton class="my-3" v-if="fetching && eventMemberTotalFetching" />
          <Dropdown
            v-else
            :options="attendanceOptions"
            :disabled="updateFetching"
            option-label="label"
            option-value="value"
            @change="(e: any) => updateAttendance(data.id, e.value)"
          >
            <template #value="slotProps">
              <InlineMessage
                icon="pi pi-pencil"
                :severity="((statusSererity as any)[data.attendance])?? ''"
                >{{ data.attendance.split("_").join(" ") }}</InlineMessage
              >
            </template>
          </Dropdown>
        </template>
      </Column>
      <Column
        :row-editor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import {
  ClubEventMemberOrderByWithRelationAndSearchRelevanceInput,
  ClubMemberEventAttendanceEnum,
  FindManyEventMemberQueryVariables,
  useCountTotalEventMemberQuery,
  useFindManyEventMemberQuery,
  useUpdateEventAttendanceMutation,
} from "@apclub/graphql";
import { useDateFormat, useDebounceFn } from "@vueuse/shared";
import {
  DataTableExportCSVOptions,
  DataTablePageEvent,
  DataTableSortEvent,
} from "primevue/datatable";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const eventId = ref("");
const searchString = ref("");
const page = ref(1);
const limit = ref(25);
const sort = ref<ClubEventMemberOrderByWithRelationAndSearchRelevanceInput[]>(
  []
);
const dialogRef = inject("dialogRef");

onMounted(() => {
  eventId.value = (dialogRef as any).value.data.eventId;
});

const dtref = ref();

const { executeQuery: exportQuery } = useFindManyEventMemberQuery({
  variables: computed(
    (): FindManyEventMemberQueryVariables => ({
      where: {
        eventId: {
          equals: eventId.value,
        },
      },
    })
  ),
  pause: true
});

const exportCSV = async () => {
  const { data } = await exportQuery();
  dtref.value.exportCSV(null, data.value?.findManyEventMember);
};

const findManyClubEventMemberQueryVariable = computed(
  (): FindManyEventMemberQueryVariables => {
    return {
      skip: (page.value <= 1 ? 0 : page.value - 1) * limit.value,
      take: limit.value,
      orderBy: sort.value,
      where: {
        eventId: {
          equals: eventId.value,
        },
        user: {
          is: {
            username: {
              contains: searchString.value,
            },
          },
        },
      },
    };
  }
);

const refreshTable = () => {
  searchString.value = "";
  page.value = 1;
};

const { data: count, fetching: eventMemberTotalFetching } =
  useCountTotalEventMemberQuery({
    variables: {
      eventId,
    },
  });
const { data, fetching } = useFindManyEventMemberQuery({
  variables: findManyClubEventMemberQueryVariable,
});

const debounceInput = useDebounceFn((e: Event) => {
  searchString.value = (e.target as any).value;
}, 800);

const onPage = (e: DataTablePageEvent): void => {
  page.value = e.page;
};

const onSort = (e: DataTableSortEvent) => {
  if (!e.sortOrder) return (sort.value = []);
  sort.value = [{ [e.sortField as any]: e.sortOrder === 1 ? "asc" : "desc" }];
};

const statusSererity = ref({
  PRESENT: "success",
  ABSENT: "error",
});

const attendanceOptions = ref([
  { label: "ABSENT", value: ClubMemberEventAttendanceEnum.Absent },
  { label: "PRESENT", value: ClubMemberEventAttendanceEnum.Present },
]);

const { executeMutation: updateEventAttendance, fetching: updateFetching } =
  useUpdateEventAttendanceMutation();

const updateAttendance = async (memberId: string, attendance: any) => {
  const { data, error } = await updateEventAttendance({
    memberId,
    attendance,
  });

  if (error) {
    return toast.add({
      severity: "error",
      summary: "Update Attendance Failed",
      detail: error.networkError
        ? error.networkError.message
        : error.graphQLErrors[0].message ?? "Operation Failed",
      life: 5000,
    });
  }
  toast.add({
    severity: "success",
    summary: "Update Attendance Successfully",
    detail: `Member ${data?.updateEventAttendance.user.username} ${
      data?.updateEventAttendance.attendance ===
      ClubMemberEventAttendanceEnum.Absent
        ? "Absented"
        : "Attended"
    } the Event`,
    life: 5000,
  });
};
</script>
