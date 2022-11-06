<script setup lang="ts">
defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <svg v-if="filled" width="24" height="24" viewBox="0 0 48 48"><mask id="svgIDa"><g fill="#fff" stroke="#fff" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M13 42h22l6-21l-10 5l-7-14l-7 14l-10-5l6 21Z" /><circle cx="7" cy="18" r="3" /><circle cx="24" cy="9" r="3" /><circle cx="41" cy="18" r="3" /></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)" /></svg>
  <svg v-else width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M13 42h22l6-21l-10 5l-7-14l-7 14l-10-5l6 21Z" /><circle cx="7" cy="18" r="3" /><circle cx="24" cy="9" r="3" /><circle cx="41" cy="18" r="3" /></g></svg>
</template>
