<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import type { Project } from '~/types/content'

defineProps({
  project: Object as PropType<Project>,
})
</script>

<template>
  <Card>
    <CardLink :href="project.link" target="_blank">
      <div class="flex space-x-2 my-2 absolute top-8 right-8">
        <Tag v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </Tag>
      </div>
      <CardIcon class="mt-12" :icon="project.icon" size="52" />
      <h1 class="text-3xl my-4 font-bold text-center">
        {{ project.name }}
      </h1>
      <h3 class="text-sm text-gray-500 dark:text-gray-300 text-center">
        {{ project.description }}
      </h3>
      <div class="flex justify-center">
        <p class="flex space-x-2 mt-2 text-xs text-gray-600 dark:text-gray-400">
          Made with {{ project.skills.join(', ') }}
        </p>
      </div>
    </CardLink>
  </Card>
</template>
