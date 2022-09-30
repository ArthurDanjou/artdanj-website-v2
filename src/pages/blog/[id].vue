<script setup lang="ts">
import type { Post } from '~/types/content'
import { queryContent, useAsyncData, useHead, useRoute } from '#imports'

const route = useRoute()
const { data } = await useAsyncData(`blog:post:${route.params.id}`, () => queryContent<Post>(`/posts/${route.params.id}`).findOne())

useHead({
  title: `${data.value.title} - Arthur Danjou`,
})
</script>

<template>
  <section class="mt-16 md:w-2/3 mx-auto sm:rounded">
    <main class="max-w-2xl px-4 mx-auto sm:px-8">
      <h1 class="text-4xl font-bold">
        {{ data.title }}
      </h1>
      <h3 class="text-xl text-gray-600 dark:text-gray-400 my-2">
        {{ data.description }}
      </h3>
      <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <div>
          Arthur Danjou / {{ data.publishedAt }}
        </div>
        <div>
          {{ data.readingMins }} min read • xxx.xxx.xxx views
        </div>
      </div>
      <div class="w-full bg-gray-300 my-4 rounded-md my-8">
        {{ data.cover }}
      </div>
      <ContentRenderer class="prose dark:prose-invert leading-6" :value="data" />
      <div class="my-8">
        Footer blog
      </div>
    </main>
  </section>
</template>
