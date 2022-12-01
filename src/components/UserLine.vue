<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import { formatLongDate } from '~/logic/dates'
import type { User } from '~/types/types'

defineProps({
  author: Object as PropType<User>,
  date: String,
  link: Boolean,
})
</script>

<template>
  <div class="z-11 flex">
    <NuxtLink v-if="link" :href="`/user/${author.username}`" class="flex space-x-4 items-center group">
      <img :src="author.avatar" alt="User avatar" height="28" width="28" class="rounded-full">
      <div class="flex flex-col space-y-1 md:(space-y-0 flex-row space-x-2 items-center) flex-wrap">
        <div class="flex space-x-2 items-center">
          <p class="duration-300 underline underline-offset-4 decoration-transparent underline-opacity-25 group-hover:(decoration-black underline-opacity-100) dark:group-hover:decoration-white">
            <span class="text-gray-400 dark:text-gray-500">@</span>{{ author.username }}
          </p>
          <div class="flex">
            <div
              v-if="author.role === 'ADMIN'"
              class="font-bold text-amber-500 text-xxs bg-amber-200/70 px-2 py-.5 rounded-full dark:(bg-amber-400/90 text-white)"
            >
              ADMIN 👑
            </div>
            <div
              v-if="author.role === 'BLOCKED'"
              class="font-bold text-red-400 text-xxs bg-red-200/60 px-2 py-.5 rounded-full dark:(bg-red-600/70 text-white)"
            >
              BLOCKED 🚫
            </div>
          </div>
        </div>
        <span class="hidden md:block text-gray-600 dark:text-gray-400">·</span>
        <p class="text-gray-600 dark:text-gray-400">
          {{ formatLongDate(date) }}
        </p>
      </div>
    </NuxtLink>
    <div v-else class="flex space-x-4 items-center">
      <img :src="author.avatar" alt="User avatar" height="28" width="28" class="rounded-full">
      <div class="flex flex-col md:(flex-row space-x-2) flex-wrap">
        <p>
          <span class="text-gray-400 dark:text-gray-500">@</span>{{ author.username }}
        </p>
        <span class="hidden md:block text-gray-600 dark:text-gray-400">·</span>
        <p class="text-gray-600 dark:text-gray-400">
          {{ formatLongDate(date) }}
        </p>
      </div>
    </div>
  </div>
</template>
