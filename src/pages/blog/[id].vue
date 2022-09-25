<script setup lang="ts">
import { useRoute } from '#app'
import type { Post } from '~/types/content'
import { formatPostDate } from '~/logic/date'
import { queryContent, useAsyncData, useHead } from '#imports'

const route = useRoute()
const { data } = await useAsyncData(`blog:post:${route.params.id}`, () => queryContent<Post>(`/posts/${route.params.id}`).findOne())

useHead({
  title: `${data.value.title} - Arthur Danjou`,
})
</script>

<template>
  <section class="mt-12 md:w-2/3 mx-auto sm:rounded">
    <main class="max-w-2xl px-4 mx-auto sm:px-8">
      <h1 class="text-4xl font-bold">
        {{ data.title }}
      </h1>
      <h3 class="text-xl text-gray-600 dark:text-gray-400 my-2">
        {{ data.description }}
      </h3>
      <div class="flex space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <div>
          {{ formatPostDate(data.publishedAt) }}
        </div>
        <span>—</span>
        <div>
          {{ data.readingMins }} min.
        </div>
      </div>
      <div class="w-full">
        {{ data.cover }}
      </div>
      <ContentRenderer id="prose" class="mt-8 prose dark:prose-invert text-justify" :value="data" />
      <div>
        Footer blog
      </div>
    </main>
  </section>
</template>

<style scoped lang="scss">
#prose {
  // todo add theme for blog post

}
</style>
