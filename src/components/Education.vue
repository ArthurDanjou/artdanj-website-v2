<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import type { Education } from '~/types/content'

defineProps({
  education: Object as PropType<Education>,
})
</script>

<template>
  <div>
    <div>
      <DateTag :start-date="education.startDate" :end-date="education.endDate" />
      <h1 class="text-lg leading-5">
        <strong>{{ education.title }}</strong>
        <span class="text-gray-600 dark:text-gray-400"> — {{ education.location }}</span>
      </h1>
    </div>
    <p class="mt-1 text-justify text-md leading-5 text-gray-600 dark:text-gray-400">
      {{ education.description }}
    </p>
  </div>
</template>
