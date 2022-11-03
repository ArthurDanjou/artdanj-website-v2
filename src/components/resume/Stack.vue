<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import type { SkillList } from '~/types/content'

defineProps({
  skill: Object as PropType<SkillList>,
})
</script>

<template>
  <div class="mb-2">
    <strong class="mr-2">{{ skill.name }}</strong><span class="text-gray-600 dark:text-gray-400">{{ skill.skills.join(', ') }}</span>
  </div>
</template>
