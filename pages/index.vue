<template>
  <div class="container">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search by title..."
      class="search-bar"
      aria-label="Search posts by title"
    />
    <div class="filters">
      <label for="platform">Filter by Platform:</label>
      <select
        id="platform"
        v-model="selectedPlatform"
        aria-label="Filter posts by platform"
      >
        <option value="">All Platforms</option>
        <option
          v-for="platform in uniquePlatforms"
          :key="platform"
          :value="platform"
        >
          {{ platform }}
        </option>
      </select>
    </div>

    <div v-if="filteredPosts.length" class="post-list">
      <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
    <p v-else role="alert">No matching posts found.</p>
  </div>
</template>

<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import { useSearch } from "@/composables/useSearch";

const { searchQuery, selectedPlatform, uniquePlatforms, filteredPosts } =
  useSearch();
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

.search-bar {
  width: 100%;
  max-width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid $border;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: $primary-color;
    outline: none;
  }
}

.filters {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

select {
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid $border;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  min-width: 180px;
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
}
</style>
