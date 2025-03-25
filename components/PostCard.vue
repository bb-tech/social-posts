<template>
  <NuxtLink
    :to="`/${post.id}`"
    class="post-card"
    :aria-label="`Read more about post ${post.title || 'Untitled Post'}`"
  >
    <div class="post-header">
      <span class="platform">{{ post.platform }}</span>
      <span class="status">{{ post.status }}</span>
    </div>

    <div class="post-content">
      <h3>{{ post.title || "Untitled Post" }}</h3>
      <div v-html="isServer ? stripHtml(post.content) : post.content"></div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { DataItem } from "@/types/types";
import { useNuxtApp } from "#app";

const { ssrContext } = useNuxtApp();
const isServer = Boolean(ssrContext);
const { post } = defineProps<{ post: DataItem }>();

const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>?/gm, "");
};
</script>

<style lang="scss" scoped>
.post-card {
  background: $post-bg;
  border: 1px solid $border;
  border-radius: 8px;
  padding: 16px;
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;

    .platform {
      color: $primary-color;
    }

    .status {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      text-transform: uppercase;
      background: $primary-color;
      color: white;
    }
  }
}
</style>
