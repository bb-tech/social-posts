<template>
  <div v-if="post" class="post-container">
    <h1>{{ post.title || "Untitled Post" }}</h1>
    <p class="platform">{{ post.platform }}</p>

    <div class="content">
      <div v-html="isServer ? stripHtml(post.content) : post.content"></div>
    </div>
    <a v-if="post.link" :href="post.link" target="_blank" class="read-more"
      >Read More</a
    >
  </div>
  <p v-else>Loading...</p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDataStore } from "@/stores/dataStore";
import { useNuxtApp } from "#app";

const { ssrContext } = useNuxtApp();
const isServer = Boolean(ssrContext);

const route = useRoute();
const store = useDataStore();

const post = computed(() =>
  store.data?.find((p) => p.id === Number(route.params.id)),
);

const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>?/gm, "");
};
</script>

<style lang="scss" scoped>
.post-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.platform {
  font-weight: bold;
  color: $primary-color;
}

.content {
  margin-top: 10px;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  color: $primary-color;
  text-decoration: none;
}
</style>
