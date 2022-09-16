<script setup lang="ts">
import { useRoute } from '#app'

const route = useRoute()
</script>

<template>
  <section class="md:w-2/3 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-dark-800 sm:rounded">
    <main class="max-w-2xl px-4 mx-auto sm:px-8">
      <ContentDoc id="prose" class="prose dark:prose-invert" :path="`/posts/${route.params.id}`">
        <template #not-found>
          <h1>Not found</h1>
        </template>
      </ContentDoc>
    </main>
  </section>
</template>

<style scoped lang="scss">
#prose {
  // todo add theme for blog post

}
</style>
