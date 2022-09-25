<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePosts } from '~/composables/useContent'

const { data: posts } = await usePosts()
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
        <BlogPost v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </div>
  </section>
</template>
