<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import type { Post } from '~/types/content'

defineProps({
  post: Object as PropType<Post>,
  width: {
    type: String,
    default: '1',
  },
})
</script>

<template>
  <Card :width="width">
    <CardLink :href="`/blog/${post.slug}`">
      <div>
        <h1 class="text-3xl font-bold">
          {{ post.title }}
        </h1>
        <h3 class="text-sm text-gray-600 dark:text-gray-400 mt-4 text-justify">
          {{ post.description }}
        </h3>
      </div>
      <div class="flex items-center justify-between mt-8">
        <p>
          {{ post.publishedAt }} • {{ post.readingMins }} min read
        </p>
        <div
          class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-900 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
        >
          <div class="flex items-center justify-center font-medium">
            Read more <Icon name="material-symbols:add-circle-outline-rounded" size="24px" class="ml-1" />
          </div>
        </div>
      </div>
    </CardLink>
  </Card>
</template>
