<script setup lang="ts">
import { computed } from '#imports'

const props = defineProps({
  skill: {
    type: String,
    default: 'rust',
  },
})

const getSkillColor = computed(() => {
  switch (props.skill.toLowerCase()) {
    case 'rust':
      return 'bg-[#dea584]'
    case 'typescript':
      return 'bg-[#007acc]'
    case 'nuxtjs':
      return 'bg-[#00c58e]'
    case 'mariadb':
      return 'bg-[#003545]'
    case 'mysql':
      return 'bg-[#4479a1]'
    case 'redis':
      return 'bg-[#d82c20]'
    case 'java':
      return 'bg-[#007396]'
    case 'kubernetes':
      return 'bg-[#326ce5]'
    case 'docker':
      return 'bg-[#2496ed]'
    case 'traefik':
      return 'bg-[#1d91d0]'
  }
})
</script>

<template>
  <div class="translate-y-px rounded-full border border-zinc-200 px-2 py-1 text-xxs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 flex items-center">
    {{ skill }} <span class="w-6px h-6px rounded-full inline-block ml-2" :class="getSkillColor" />
  </div>
</template>
