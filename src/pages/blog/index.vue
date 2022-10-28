<script setup lang="ts">
import { useHead, usePosts } from '#imports'

const { data: posts } = await usePosts()

useHead({
  title: 'My Shelf - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Shelf" />
    <div class="flex justify-center">
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-1 grid-flow-row-dense">
        <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </div>
  </section>
</template>
