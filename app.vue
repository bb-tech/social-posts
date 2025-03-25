<script setup lang="ts">
import { useDataStore } from "@/stores/dataStore";

const store = useDataStore();
await store.fetchData();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
