<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import { useI18n } from 'vue-i18n'

const { getTextColor } = useTheme()

const { data: posts } = await useAsyncData('posts', () => queryContent('/posts').find())

const { t } = useI18n()

useHead({
  title: t('head.blog'),
})
</script>

<template>
  <section>
    <template>
      <section>
        <PageTitle title="My Shelf" />
        <div class="flex justify-center">
          <div class="grid grid-cols-2 gap-6 grid-flow-row-dense auto-">
            <Card v-for="post in posts" :key="post.slug">
              <CardLink href="/blog/123">
                <h1 class="text-3xl font-bold" :class="getTextColor()">
                  {{ post.title }}
                </h1>
                <h3 class="text-sm text-stone-500 dark:text-gray-400 mt-2 text-justify">
                  {{ post.description }}
                </h3>
                <div class="flex items-center justify-between mt-4">
                  <button
                      class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
                  >
                    <div class="flex items-center justify-center flex items-center justify-center">
                      Read more <PlusIcon class="ml-2" />
                    </div>
                  </button>
                  <p class="ml-4" :class="getTextColor()">
                    {{ post.date }}
                  </p>
                </div>
              </CardLink>
            </Card>
          </div>
        </div>
      </section>
    </template>
    <div class="flex justify-center">
      <div class="grid grid-cols-2 gap-6 grid-flow-row-dense auto-">
        <Card v-for="post in posts" :key="post.slug">
          <CardLink href="/blog/123">
            <h1 class="text-3xl font-bold" :class="getTextColor()">
              {{ post.title }}
            </h1>
            <h3 class="text-sm text-stone-500 dark:text-gray-400 mt-2 text-justify">
              {{ post.description }}
            </h3>
            <div class="flex items-center justify-between mt-4">
              <button
                  class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
              >
                <div class="flex items-center justify-center flex items-center justify-center">
                  Read more <PlusIcon class="ml-2" />
                </div>
              </button>
              <p class="ml-4" :class="getTextColor()">
                {{ post.date }}
              </p>
            </div>
          </CardLink>
        </Card>
      </div>
    </div>
  </section>
</template>
