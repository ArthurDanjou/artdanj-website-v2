<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import { formatGuestBookDate } from '~/logic/dates'
import type { User } from '~/types/types'

defineProps({
  author: Object as PropType<User>,
  date: String,
})
</script>

<template>
  <div class="flex">
    <NuxtLink :href="`/user/${author.username}`" class="flex space-x-4 items-center group">
      <img :src="author.avatar" alt="User avatar" height="28" width="28" class="rounded-full">
      <div class="flex space-x-2">
        <p class="duration-300 underline underline-offset-4 decoration-transparent underline-opacity-25 group-hover:(decoration-black underline-opacity-100) dark:group-hover:decoration-white">
          <span class="text-gray-400 dark:text-gray-500">@</span>{{ author.username }}
        </p>
        <span class="text-gray-600 dark:text-gray-400">·</span>
        <p class="text-gray-600 dark:text-gray-400">
          {{ formatGuestBookDate(date) }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
