<template>
    <div>
      <Toast />
    </div>
</template>

<script setup lang="ts">
  import { useToast } from "primevue/usetoast";
  const toast = useToast();

  const showSuccess = () => {
    toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
  }
</script>
