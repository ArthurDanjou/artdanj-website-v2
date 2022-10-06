<script setup lang="ts">
import { definePageMeta, useHead } from '#imports'

useHead({
  title: 'Site under maintenance, please come back later - Arthur Danjou',
})

definePageMeta({
  layout: 'maintenance',
})
</script>

<template>
  <section class="h-full flex justify-center">
    <div class="flex flex-col justify-center items-center text-center md:w-1/2">
      <h1 class="text-2xl font-bold md:text-5xl my-4">
        The website is under maintenance !
      </h1>
      <h3 class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
        Someone has kidnapped our website. We are negotiating with them to get it back as soon as possible.
      </h3>
    </div>
  </section>
</template>
