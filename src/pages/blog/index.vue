<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Post } from '~/types/content'
import { formatPostDate } from '~/logic/date'

const { data: posts } = await useAsyncData('posts', () => queryContent<Post[]>('/posts')
  .only(['title', 'slug', 'description', 'publishedAt', 'cover', 'readingMins'])
  .find())

const { t } = useI18n()

useHead({
  title: t('head.blog'),
})
</script>

<template>
  <section>
    <PageTitle title="blog" />
    <div class="flex justify-center">
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 grid-flow-row-dense">
        <Card v-for="post in posts" :key="post.slug">
          <CardLink :href="`/blog/${post.slug}`">
            <h1 class="text-3xl font-bold">
              {{ post.title }}
            </h1>
            <h3 class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-justify">
              {{ post.description }}
            </h3>
            <div class="flex items-center justify-between mt-8">
              <p>
                {{ formatPostDate(post.publishedAt) }}<br>
                <span class="text-gray-600 dark:text-gray-400">{{ post.readingMins }} min.</span>
              </p>
              <button
                  class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-900 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
              >
                <div class="flex items-center justify-center flex items-center justify-center">
                  {{ t('blog.read') }}<Icon name="material-symbols:add-circle-outline-rounded" size="20px" class="ml-1" />
                </div>
              </button>
            </div>
          </CardLink>
        </Card>
      </div>
    </div>
  </section>
</template>
