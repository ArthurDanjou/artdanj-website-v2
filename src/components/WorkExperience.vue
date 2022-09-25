<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import type { WorkExperience } from '~/types/content'

defineProps({
  experience: Object as PropType<WorkExperience>,
})
</script>

<template>
  <div>
    <div>
      <DateTag :start-date="experience.startDate" :end-date="experience.endDate" />
      <div v-if="experience.companyLink" class="text-lg">
        <Link :href="experience.companyLink" target="_blank">
          {{ experience.company }}
        </Link>
        <span class="text-gray-600 dark:text-gray-400"> — {{ experience.title }}</span>
      </div>
      <h1 v-else class="text-lg">
        <span class="font-medium text-black dark:text-white">{{ experience.company }}</span>
        <span class="text-gray-600 dark:text-gray-400"> — {{ experience.title }}</span>
      </h1>
    </div>
    <p class="text-justify text-md leading-5 text-gray-600 dark:text-gray-400">
      {{ experience.description }}
    </p>
  </div>
</template>
