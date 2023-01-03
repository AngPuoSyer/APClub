<template>
  <div class="container">
    <div>
      <h1 class="container-heading">Events</h1>
      <h2 class="container-sub">{{ clubStore.selectedClub?.name }}</h2>
    </div>
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
        loading-icon="pi pi-spinner"
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
                  ref="searchRef"
                />
              </span>
              <Button
                label="Export"
                icon="pi pi-upload"
                class="p-button-secondary p-button-sm p-button-raised"
                @click="exportCSV"
              />
              <Button
                label="New"
                icon="pi pi-plus"
                class="p-button-success mr-2 p-button-sm p-button-raised"
                @click="toCreate"
              />
            </div>
          </div>
        </template>
        <Column field="name" header="Name" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubEventTotalFetching" />
            <NuxtLink v-else :to="`events/${data.id}`">
              <span>{{ data.name }}</span>
            </NuxtLink>
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
            <Skeleton class="my-3" v-if="false" />
            <Button
              v-else
              type="button"
              icon="pi pi-eye"
              @click="() => toEventPreview(data.id)"
              class="p-button-raised"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ClubEventOrderByWithRelationAndSearchRelevanceInput,
  FindManyClubEventQueryVariables,
  useCountTotalClubEventQuery,
  useFindManyClubEventQuery,
} from "@apclub/graphql";
import { useDateFormat, useDebounceFn } from "@vueuse/shared";
import { DataTablePageEvent, DataTableSortEvent } from "primevue/datatable";
import { useAdminClubStore } from "~~/store";

const clubStore = useAdminClubStore();

const dtref = ref();

const { executeQuery: exportQuery } = useFindManyClubEventQuery({
  variables: {
    where: {
      clubId: {
        equals: clubStore.selectedClub?.id,
      },
    },
  },
  pause: true,
});

const exportCSV = async () => {
  const { data } = await exportQuery();
  dtref.value.exportCSV(null, data.value?.findManyClubEvent);
};

const { data: totalClubEvent, fetching: clubEventTotalFetching } =
  useCountTotalClubEventQuery();
const searchString = ref("");
const page = ref(1);
const limit = ref(25);
const sort = ref<ClubEventOrderByWithRelationAndSearchRelevanceInput[]>([]);

const searchRef = ref();

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

const toCreate = () => {
  navigateTo("/events/create");
};

const refreshTable = () => {
  searchString.value = "";
  page.value = 1;
};

const findManyClubEventQueryVariable = computed(
  (): FindManyClubEventQueryVariables => {
    return {
      skip: (page.value <= 1 ? 0 : page.value - 1) * limit.value,
      take: limit.value,
      orderBy: sort.value,
      where: {
        clubId: {
          equals: clubStore.selectedClub?.id,
        },
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
</script>

<style scoped>
:deep .p-inline-message-icon {
  display: none;
}
</style>
