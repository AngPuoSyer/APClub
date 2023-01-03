<template>
  <div class="container">
    <Toast />
    <div>
      <h1 class="container-heading">Events</h1>
      <h2 class="container-sub">All important metrics at a glance</h2>
    </div>
    <TabView
      :active-index="activeIndex"
      class="-mb-6"
      @tab-change="onTabChange"
    >
      <TabPanel header="Events"></TabPanel>
      <TabPanel header="Request"></TabPanel>
    </TabView>
    <div class="mt-3">
      <DataTable
        @page="onPage"
        @sort="onSort"
        v-model:rows="limit"
        :lazy="true"
        :total-records="totalClubEvent?.countTotalClubEvent ?? 0"
        :value="events?.findManyClubEvent ?? []"
        :paginator="true"
        class="p-datatable-sm"
        dataKey="id"
        :rowHover="true"
        filterDisplay="menu"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} clubs"
        loading-icon="pi \z"
        responsiveLayout="scroll"
        removable-sort
        ref="dtref"
      >
        <template #header>
          <div class="flex justify-between items-center py-1">
            <h3 class="m-0 text-xl">Events</h3>
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
                :disabled="activeIndex === 1"
                @click="exportCSV"
              />
            </div>
          </div>
        </template>
        <Column field="name" header="Name" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubEventTotalFetching" />
            <NuxtLink class="w-full" :to="`events/${data.id}`" v-else>
              <div class="w-full">
                {{ data.name }}
              </div></NuxtLink
            >
          </template>
        </Column>
        <Column field="startAt" header="Start" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubEventTotalFetching" />
            <span v-else>
              {{ useDateFormat(data.startAt, "DD/MM/YYYY HH:mmA").value }}
            </span>
          </template>
        </Column>
        <Column field="endAt" header="End" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubEventTotalFetching" />
            <span v-else>
              {{ useDateFormat(data.endAt, "DD/MM/YYYY HH:mmA").value }}
            </span>
          </template>
        </Column>
        <Column
          field="createdAt"
          header="Auto Approved In"
          :sortable="false"
          v-if="!fetching && !clubEventTotalFetching && activeIndex === 1"
        >
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubEventTotalFetching" />
            <span v-else>
              {{
                formatDuration(
                  intervalToDuration({
                    start: new Date(data.createdAt),
                    end: endOfDay(add(new Date(data.createdAt), { days: 3 })),
                  }),
                  { format: ["days", "hours"] }
                )
              }}
            </span>
          </template>
        </Column>
        <Column field="status" header="Status" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubEventTotalFetching" />
            <InlineMessage
              v-else
              icon="pi pi-pencil"
              :severity="((statusSererity as any)[data.status])?? ''"
              >{{ data.status.split("_").join(" ") }}</InlineMessage
            >
          </template>
        </Column>
        <Column
          headerStyle="width: 4rem; text-align: center"
          bodyStyle="text-align: center; overflow: visible"
        >
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubEventTotalFetching" />
            <Button
              v-else-if="
                !fetching && !clubEventTotalFetching && activeIndex === 0
              "
              v-if="activeIndex === 0"
              class="p-button-raised"
              type="button"
              icon="pi pi-eye"
              @click="() => toEventPreview(data.id)"
            />
            <div
              class="flex gap-4"
              v-else-if="
                !fetching && !clubEventTotalFetching && activeIndex === 1
              "
            >
              <Button
                type="button"
                icon="pi pi-check"
                class="p-button-success p-button-raised"
                :disabled="updating"
                @click="() => approveRequest(data.id, true)"
              />
              <Button
                type="button"
                icon="pi pi-times"
                class="p-button-danger p-button-raised"
                :disabled="updating"
                @click="() => approveRequest(data.id, false)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ClubEventOrderByWithRelationAndSearchRelevanceInput,
  ClubEventStatusEnum,
  FindManyClubEventQueryVariables,
  useCountTotalClubEventQuery,
  useFindManyClubEventQuery,
  useUpdateClubEventMutation,
} from "@apclub/graphql";
import { useDateFormat, useDebounceFn } from "@vueuse/shared";
import { DataTablePageEvent, DataTableSortEvent } from "primevue/datatable";
import { useToast } from "primevue/usetoast";
import { add, intervalToDuration, endOfDay, formatDuration } from "date-fns";

const dtref = ref()

const { executeQuery: exportQuery } = useFindManyClubEventQuery({
  pause: true
})

const exportCSV = async () => {
  const { data } = await exportQuery() 
  dtref.value.exportCSV(null, data.value?.findManyClubEvent)
}

const { data: totalClubEvent, fetching: clubEventTotalFetching } =
  useCountTotalClubEventQuery();
const searchString = ref("");
const page = ref(1);
const limit = ref(25);
const sort = ref<ClubEventOrderByWithRelationAndSearchRelevanceInput[]>([]);
const activeIndex = ref(0);
const toast = useToast();

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

const findManyClubEventQueryVariable = computed(
  (): FindManyClubEventQueryVariables => {
    return {
      skip: (page.value <= 1 ? 0 : page.value - 1) * limit.value,
      take: limit.value,
      orderBy: sort.value,
      where: {
        ...(activeIndex.value === 1
          ? {
              status: {
                equals: ClubEventStatusEnum.InReview,
              },
            }
          : {}),
        OR: [
          {
            name: {
              contains: searchString.value,
            },
          },
          {
            description: {
              contains: searchString.value,
            },
          },
        ],
      },
    };
  }
);

const refreshTable = () => {
  searchString.value = "";
  page.value = 1;
};


const statusSererity = ref({
  IN_REVIEW: "warn",
  ONGOING: "success",
  CANCELLED: "error",
  AWAITING: "info",
});

const { data: events, fetching } = useFindManyClubEventQuery({
  variables: findManyClubEventQueryVariable,
});

const toEventPreview = (eventId: string) => {
  navigateTo(`events/${eventId}`);
};

const onTabChange = (e: any) => {
  activeIndex.value = e.index;
};

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

<style scoped>
:deep .p-inline-message-icon {
  display: none;
}
</style>
