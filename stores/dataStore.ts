import { defineStore } from "pinia";
import type { DataItem } from "@/types/types";

export const useDataStore = defineStore("data", () => {
  const data = ref<DataItem[] | null>(null);
  async function fetchData() {
    if (!data.value) {
      const { data: fetchedData } = await useAsyncData("items", () =>
        $fetch("/api/data"),
      );
      data.value = fetchedData.value;
    }
  }

  return { data, fetchData };
});
