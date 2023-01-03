<template>
  <div class="container">
    <div>
      <h1 class="container-heading">Clubs</h1>
      <h2 class="container-sub">All important metrics at a glance</h2>
    </div>
    <div class="mt-3">
      <DataTable
        @page="onPage"
        @sort="onSort"
        v-model:rows="limit"
        :lazy="true"
        :total-records="count?.clubTotalCount ?? 0"
        :value="clubs?.findManyClub ?? []"
        :paginator="true"
        class="p-datatable-sm"
        dataKey="id"
        :rowHover="true"
        filterDisplay="menu"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} clubs"
        loading-icon="pi pi-spinner"
        :globalFilterFields="[
          'name',
          'country.name',
          'representative.name',
          'status',
        ]"
        responsiveLayout="scroll"
        removable-sort
        ref="dtref"
      >
        <template #header>
          <div class="flex justify-between items-center py-1">
            <h3 class="m-0 text-xl">Clubs</h3>
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
            <Skeleton class="my-3" v-if="fetching" />
            <NuxtLink v-else :to="`clubs/${data.id}`">
              <span >{{ data.name }}</span>
            </NuxtLink>
          </template>
        </Column>
        <Column field="label" header="label" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching" />
            <span v-else>
              {{ data.label }}
            </span>
          </template>
        </Column>
        <Column field="createdAt" header="Created At" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching" />
            <span v-else>
              {{ useDateFormat(data.createdAt, "DD/MM/YYYY").value }}
            </span>
          </template>
        </Column>
        <Column field="status" header="Status" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching" />
            <InlineMessage
              v-else
              :severity="((statusSererity as any)[data.status])?? ''"
              icon="pi pi-pencil"
              >{{ data.status }}</InlineMessage
            >
          </template>
        </Column>
        <Column
          headerStyle="width: 4rem; text-align: center"
          bodyStyle="text-align: center; overflow: visible"
        >
          <template #body>
            <Skeleton class="my-3" v-if="fetching" />
            <Button
              class="p-button-raised"
              type="button"
              icon="pi pi-eye"
              v-else
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat, useDebounceFn } from "@vueuse/shared";
import Column from "primevue/column";
import { DataTablePageEvent, DataTableSortEvent } from "primevue/datatable";
import InputText from "primevue/inputtext";
import {
  FindManyClubQueryVariables,
  useFindManyClubQuery,
  useClubTotalCountQuery,
  ClubOrderByWithRelationAndSearchRelevanceInput,
} from "@apclub/graphql";

export type InlineMessageSeverityType =
  | "success"
  | "info"
  | "warn"
  | "error"
  | undefined;

const dtref = ref()

const { executeQuery: exportQuery } = useFindManyClubQuery({
  pause: true
})

const exportCSV = async () => {
  const { data } = await exportQuery() 
  dtref.value.exportCSV(null, data.value?.findManyClub)
}

const searchString = ref("");
const page = ref(1);
const limit = ref(25);
const sort = ref<ClubOrderByWithRelationAndSearchRelevanceInput[]>([]);

const debounceInput = useDebounceFn((e: Event) => {
  searchString.value = (e.target as any).value;
}, 800);

const onPage = (e: DataTablePageEvent) => {
  page.value = e.page;
};

const onSort = (e: DataTableSortEvent) => {
  if (!e.sortOrder) return (sort.value = []);
  sort.value = [{ [e.sortField as any]: e.sortOrder === 1 ? "asc" : "desc" }];
};

const toCreate = () => {
  navigateTo("clubs/create");
};

const { data: count } = useClubTotalCountQuery();
const findManyClubQueryVariable = computed((): FindManyClubQueryVariables => {
  return {
    skip: (page.value <= 1 ? 0 : page.value - 1) * limit.value,
    take: limit.value,
    orderBy: sort.value,
    where: {
      OR: [
        {
          name: {
            contains: searchString.value,
          },
        },
        {
          label: {
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
});

const refreshTable = () => {
  searchString.value = "";
  page.value = 1;
};


const statusSererity = ref({
  ACTIVE: "success",
  INACTIVE: "warn",
  INVALIDATED: "error",
  DEPRECATED: "info",
});

const { data: clubs, fetching } = useFindManyClubQuery({
  variables: findManyClubQueryVariable,
});
</script>

<style scoped>
:deep .p-inline-message-icon {
  display: none;
}
</style>
