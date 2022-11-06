<script setup lang="ts">
defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <svg v-if="filled" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M32 208a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h48a40 40 0 0 1 40 40v80a8 8 0 0 0 16 0V88a40 40 0 0 1 40-40h48a16 16 0 0 1 16 16v128a16 16 0 0 1-16 16h-64a24.1 24.1 0 0 0-24 24a8 8 0 0 1-16 0a24.1 24.1 0 0 0-24-24Z" /></svg>
  <svg v-else width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M224 44h-64a43.8 43.8 0 0 0-32 13.8A43.8 43.8 0 0 0 96 44H32a20.1 20.1 0 0 0-20 20v128a20.1 20.1 0 0 0 20 20h64a20.1 20.1 0 0 1 20 20a12 12 0 0 0 24 0a20.1 20.1 0 0 1 20-20h64a20.1 20.1 0 0 0 20-20V64a20.1 20.1 0 0 0-20-20ZM96 188H36V68h60a20.1 20.1 0 0 1 20 20v104.8a43.4 43.4 0 0 0-20-4.8Zm124 0h-60a43.4 43.4 0 0 0-20 4.8V88a20.1 20.1 0 0 1 20-20h60Z" /></svg>
</template>
