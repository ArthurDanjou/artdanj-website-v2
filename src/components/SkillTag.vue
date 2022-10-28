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
      return 'text-[#dea584]'
    case 'typescript':
      return 'text-[#007acc]'
    case 'nuxtjs':
      return 'text-[#00c58c]'
    case 'mariadb':
      return 'text-[#003545]'
    case 'mysql':
      return 'text-[#4479a1]'
    case 'redis':
      return 'text-[#d82c20]'
    case 'java':
      return 'text-[#007396]'
    case 'kubernetes':
      return 'text-[#326ce5]'
    case 'docker':
      return 'text-[#2496ed]'
    case 'traefik':
      return 'text-[#1d91d0]'
  }
})
</script>

<template>
  <div class="text-xxs" :class="getSkillColor">
    {{ skill }}
  </div>
</template>
