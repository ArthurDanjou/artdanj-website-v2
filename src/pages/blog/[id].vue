<script setup lang="ts">
import type { Post } from '~/types/content'
import { onMounted, queryContent, useAsyncData, useHead, useRoute } from '#imports'
import { usePost } from '~/composables/usePost'

const route = useRoute()
const { data: postContent } = await useAsyncData(`blog:post-content:${route.params.id}`, () => queryContent<Post>(`/posts/${route.params.id}`).findOne())
const { like, getLikes, view, getViews } = await usePost(route.params.id)

onMounted(() => {
  view()
})

useHead({
  title: `${postContent.value.title} - Arthur Danjou's shelf`,
})
</script>

<template>
  <section class="mt-16 md:mt-32 md:w-2/3 mx-auto sm:rounded">
    <main class="max-w-2xl px-4 mx-auto sm:px-8">
      <h1 class="text-4xl font-bold">
        {{ postContent.title }}
      </h1>
      <h3 class="text-xl text-gray-600 dark:text-gray-400 my-2">
        {{ postContent.description }}
      </h3>
      <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <div>
          Arthur Danjou / {{ postContent.publishedAt }}
        </div>
        <div>
          {{ postContent.readingMins }} min read • {{ getViews }} views
        </div>
      </div>
      <div class="w-full bg-gray-300 my-4 rounded-md my-8">
        {{ postContent.cover }}
      </div>
      <ContentRenderer class="prose dark:prose-invert leading-6" :value="postContent" />
      <div class="my-8">
        Footer blog
        <div @click.prevent="like()">
          LIKE - {{ getLikes }}
        </div>
      </div>
    </main>
  </section>
</template>
