<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'
import type { Post } from '~/types/content'

const { getTextColor } = useTheme()

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
            <h1 class="text-3xl font-bold" :class="getTextColor()">
              {{ post.title }}
            </h1>
            <h3 class="text-sm text-stone-500 dark:text-gray-400 mt-2 text-justify">
              {{ post.description }}
            </h3>
            <div class="flex items-center justify-between mt-8">
              <p>
                <span :class="getTextColor()">{{ post.publishedAt }}</span> <br>
                <span :class="getTextColor()">{{ post.readingMins }}</span> min.
              </p>
              <button
                  class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-900 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
              >
                <div class="flex items-center justify-center flex items-center justify-center">
                  Read more <Icon name="material-symbols:add-circle-outline-rounded" size="28px" class="ml-2" />
                </div>
              </button>
            </div>
          </CardLink>
        </Card>
      </div>
    </div>
  </section>
</template>
