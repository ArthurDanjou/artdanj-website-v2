<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import type { Post } from '~/types/content'
import { formatShortDate } from '~/logic/dates'

defineProps({
  post: Object as PropType<Post>,
})
</script>

<template>
  <Card>
    <CardLink :href="`/blog/${post.slug}`">
      <div>
        <h1 class="text-3xl font-bold text-center">
          {{ post.title }}
        </h1>
        <h3 class="text-sm text-gray-600 dark:text-gray-400 my-2 text-center">
          {{ post.description }}
        </h3>
      </div>
      <div class="flex justify-center mt-16 space-x-4">
        <p>
          {{ formatShortDate(post.publishedAt) }}
        </p>
        <span>•</span>
        <p>
          {{ post.readingMins }} min. read
        </p>
      </div>
    </CardLink>
  </Card>
</template>
