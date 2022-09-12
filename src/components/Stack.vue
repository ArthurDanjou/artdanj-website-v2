<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
import type { SkillList } from '~/types/content'

defineProps({
  skill: Object as PropType<SkillList>,
})

const { t } = useI18n()
</script>

<template>
  <div class="mb-2">
    <strong class="mr-2">{{ t(skill.name.code) }}</strong><span class="text-gray-600 dark:text-gray-400">{{ skill.skills.join(', ') }}</span>
  </div>
</template>
