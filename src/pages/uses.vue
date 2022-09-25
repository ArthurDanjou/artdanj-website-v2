<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'My Uses - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Uses" />
    <div class="flex justify-center">
      <ContentDoc class="w-1/2 prose" path="/uses" />
    </div>
  </section>
</template>
