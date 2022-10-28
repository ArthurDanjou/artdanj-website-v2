<script setup lang="ts">
import { definePageMeta, useAsyncData, useHead } from '#imports'
import type { Maintenance } from '~/types/types'

useHead({
  title: 'Site under maintenance, please come back later - Arthur Danjou',
})

const { data: maintenance } = await useAsyncData('maintenance', () => {
  return $fetch<Maintenance>('/api/maintenance')
})

definePageMeta({
  layout: 'maintenance',
})
</script>

<template>
  <section class="h-full flex justify-center">
    <div class="flex flex-col justify-center items-center text-center md:w-3/4 gap-y-4">
      <div class="flex gap-x-4 items-center">
        <Icon class="text-amber-400" name="ph:warning-octagon-fill" size="72px" />
        <h1 class="text-2xl font-bold md:text-5xl">
          The website is under maintenance !
        </h1>
      </div>
      <h3 class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
        {{ maintenance.reason }}
      </h3>
      <p class="text-md">
        - The ArtDanjProduction team.
      </p>
    </div>
  </section>
</template>
