<template>
  <div class="container">
    <div>
      <h1 class="container-heading">Members</h1>
      <h2 class="container-sub">{{ clubStore.selectedClub?.name }}</h2>
    </div>
    <div class="mt-3">
      <DataTable
        @page="onPage"
        @sort="onSort"
        v-model:rows="limit"
        :lazy="true"
        :total-records="count?.countTotalClubMember ?? 0"
        :value="data?.findManyClubMember ?? []"
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
        <Column field="user.username" header="Name" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubMemberTotalFetching" />
            <NuxtLink v-else :to="`events/${data.id}`">
              <span>{{ data.user.username }}</span>
            </NuxtLink>
          </template>
        </Column>
        <Column field="createdAt" header="Joined At" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubMemberTotalFetching" />
            <span v-else>
              {{ useDateFormat(data.createdAt, "DD/MM/YYYY HH:mmA").value }}
            </span>
          </template>
        </Column>
        <Column field="deletedAt" header="Left At" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubMemberTotalFetching" />
            <span v-else>
              {{
                data.deletedAt
                  ? useDateFormat(data.deletedAt, "DD/MM/YYYY HH:mmA").value
                  : "-"
              }}
            </span>
          </template>
        </Column>
        <Column field="status" header="Status" :sortable="true">
          <template #body="{ data }">
            <Skeleton class="my-3" v-if="fetching && clubMemberTotalFetching" />
            <InlineMessage
              v-else
              icon="pi pi-pencil"
              :severity="((statusSererity as any)[data.status]) ?? ''"
              >{{ data.status.split("_").join(" ") }}</InlineMessage
            >
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ClubMemberOrderByWithRelationAndSearchRelevanceInput,
  FindManyClubMemberQueryVariables,
  SortOrder,
  useCountTotalClubMemberQuery,
  useFindManyClubMemberQuery,
} from "@apclub/graphql";
import { useDebounceFn } from "@vueuse/shared";
import { DataTablePageEvent, DataTableSortEvent } from "primevue/datatable";
import { useAdminClubStore } from "~~/store";
import { useDateFormat } from "@vueuse/shared";

const clubStore = useAdminClubStore();

const searchString = ref("");
const page = ref(1);
const limit = ref(25);
const sort = ref<ClubMemberOrderByWithRelationAndSearchRelevanceInput[]>([]);

const dtref = ref();

const { executeQuery: exportQuery } = useFindManyClubMemberQuery({
  variables: {
    where: {
      clubId: {
        equals: clubStore.selectedClub!.id,
      },
    },
  },
  pause: true,
});

const exportCSV = async () => {
  const { data } = await exportQuery();
  dtref.value.exportCSV(null, data.value?.findManyClubMember);
};

const findManyClubEventMemberQueryVariable = computed(
  (): FindManyClubMemberQueryVariables => {
    return {
      skip: (page.value <= 1 ? 0 : page.value - 1) * limit.value,
      take: limit.value,
      orderBy: sort.value,
      where: {
        clubId: {
          equals: clubStore.selectedClub!.id,
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

const { data: count, fetching: clubMemberTotalFetching } =
  useCountTotalClubMemberQuery({
    variables: {
      clubId: clubStore.selectedClub!.id,
    },
  });
const { data, fetching } = useFindManyClubMemberQuery({
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
  if (e.sortField === "username")
    return (sort.value = [
      {
        user: { username: e.sortOrder === 1 ? SortOrder.Asc : SortOrder.Desc },
      },
    ]);
  sort.value = [{ [e.sortField as any]: e.sortOrder === 1 ? "asc" : "desc" }];
};

const refreshTable = () => {
  searchString.value = "";
  page.value = 1;
};

const statusSererity = ref({
  ACTIVE: "success",
  INACTIVE: "info",
  LEFT: "error",
  PREMIUM: "warn",
});
</script>

<style scoped>
:deep .p-inline-message-icon {
  display: none;
}
</style>
