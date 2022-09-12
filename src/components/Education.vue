<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PropType } from '@vue/runtime-core'
import type { Education } from '~/types/content'

defineProps({
  education: Object as PropType<Education>,
})

const { t } = useI18n()
</script>

<template>
  <div>
    <div>
      <DateTag :start-date="education.startDate" :end-date="education.endDate" />
      <h1 class="text-lg leading-5">
        <strong>{{ t(education.title.code) }}</strong> — {{ education.location }}
      </h1>
    </div>
    <p class="text-justify text-md leading-5 dark:text-gray-300">
      {{ t(education.description.code) }}
    </p>
  </div>
</template>
