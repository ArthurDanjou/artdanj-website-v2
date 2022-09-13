<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'
import type { WorkExperience } from '~/types/content'

defineProps({
  experience: Object as PropType<WorkExperience>,
})

const { t } = useI18n()
const { getTextColor } = useTheme()
</script>

<template>
  <div>
    <div>
      <DateTag :start-date="experience.startDate" :end-date="experience.endDate" />
      <div v-if="experience.companyLink" class="text-lg">
        <Link :href="experience.companyLink" target="_blank">
          {{ experience.company }}
        </Link>
        <span class="text-gray-700 dark:text-gray-300"> — {{ t(experience.title.code) }}</span>
      </div>
      <h1 v-else class="text-lg">
        <span class="font-medium text-black dark:text-white">{{ experience.company }}</span>
        <span class="text-gray-700 dark:text-gray-300"> — {{ t(experience.title.code) }}</span>
      </h1>
    </div>
    <p class="text-justify text-md leading-5 dark:text-gray-300">
      {{ t(experience.description.code) }}
    </p>
  </div>
</template>
