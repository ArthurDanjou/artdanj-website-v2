<script setup lang="ts">
import type { Post } from '~/types/content'
import { onMounted, queryContent, useAsyncData, useHead, useRoute } from '#imports'
import { usePost } from '~/composables/usePost'

const route = useRoute()
const { data: postContent } = await useAsyncData<Post>(`blog:post-content:${route.params.id}`, () => queryContent<Post>(`/posts/${route.params.id}`).findOne())
const { post, like, likes, view, views } = await usePost(route.params.id, postContent.value?.author)

onMounted(() => {
  view()
})

useHead({
  title: `${postContent.value?.title} - Arthur Danjou's shelf`,
})
</script>

<template>
  <section class="mt-16 md:mt-32 md:w-2/3 mx-auto sm:rounded">
    <main class="max-w-2xl px-4 mx-auto sm:px-8">
      <ALink class="mb-4" link="/blog">
        Back to the shelf
      </ALink>
      <h1 class="text-4xl font-bold">
        {{ postContent.title }}
      </h1>
      <h3 class="text-xl text-gray-600 dark:text-gray-400 my-2">
        {{ postContent.description }}
      </h3>
      <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <div class="flex space-x-4">
          <p>
            {{ post.author.username }}
          </p>
          <span>/</span>
          <p>
            {{ postContent.publishedAt }}
          </p>
        </div>
        <div>
          {{ postContent.readingMins }} min read • {{ views }} views
        </div>
      </div>
      <div class="w-full bg-gray-300 my-4 rounded-md my-8">
        {{ postContent.cover }}
      </div>
      <ContentRenderer class="prose dark:prose-invert leading-6" :value="postContent" />
      <Separator>
        <template #icon>
          <Icon name="ph:info-bold" size="24" />
        </template>
        <div>
          <p class="text-justify">
            Thanks for reading this post! If you liked it, please consider sharing it with your friends.
          </p>
          <div @click.prevent="like()">
            LIKE - {{ likes }}
          </div>
          Back to top
          copy link
        </div>
      </Separator>
      <Separator>
        <template #icon>
          <Icon name="ph:chat-circle-bold" size="24" />
        </template>
        <div>
          Comments
        </div>
      </Separator>
    </main>
  </section>
</template>
