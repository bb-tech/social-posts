import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDebounceFn } from "@vueuse/core";
import { useDataStore } from "@/stores/dataStore";
import type { DataItem } from "@/types/types";

export function useSearch() {
  const store = useDataStore();
  const route = useRoute();
  const router = useRouter();

  const searchQuery = ref(route.query.search?.toString() || "");
  const selectedPlatform = ref(route.query.platform?.toString() || "");

  const uniquePlatforms = computed(() => {
    const data = store.data ?? [];
    return [...new Set(data.map((post) => post.platform))];
  });

  const updateQueryParams = useDebounceFn(() => {
    router.replace({
      query: {
        search: searchQuery.value || undefined,
        platform: selectedPlatform.value || undefined,
      },
    });
  }, 500);

  watch([searchQuery, selectedPlatform], updateQueryParams);

  const filteredPosts = computed(() => {
    const data = store.data ?? [];
    return data.filter(
      (post: DataItem) =>
        (!selectedPlatform.value || post.platform === selectedPlatform.value) &&
        (!searchQuery.value ||
          post.title?.toLowerCase().includes(searchQuery.value.toLowerCase())),
    );
  });

  return {
    searchQuery,
    selectedPlatform,
    uniquePlatforms,
    filteredPosts,
  };
}
