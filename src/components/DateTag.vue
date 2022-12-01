<script setup lang="ts">
import { formatTodayDate } from '~/logic/dates'

defineProps({
  startDate: String,
  endDate: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div v-if="startDate !== endDate" class="mb-1 translate-y-px inline-block flex-none rounded bg-zinc-200 p-1 text-xs font-medium leading-none text-zinc-500 dark:(bg-zinc-800 text-zinc-400)">
    {{ formatTodayDate(startDate) }} — {{ formatTodayDate(endDate) }}
  </div>
  <div v-else class="mb-1 translate-y-px inline-block flex-none rounded bg-zinc-200 p-1 text-xs font-medium leading-none text-zinc-500 dark:(bg-zinc-800 text-zinc-400)">
    {{ formatTodayDate(endDate) }}
  </div>
</template>
