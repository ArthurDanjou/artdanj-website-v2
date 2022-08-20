<script setup lang="ts">
defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <svg
    v-if="filled"
    width="24" height="24" viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M224 115.5V208a16.1 16.1 0 0 1-8.4 14.1a15.3 15.3 0 0 1-7.6 1.9h-48a8 8 0 0 1-8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v48a8 8 0 0 1-8 8H48a15.9 15.9 0 0 1-12-5.4a16.9 16.9 0 0 1-4-11v-92.1a16 16 0 0 1 5.2-11.8l80-72.7a16 16 0 0 1 21.6 0l80 72.7a16 16 0 0 1 5.2 11.8Z"
    />
  </svg>
  <svg
    v-else
    width="24" height="24" viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M208 228h-48a20.1 20.1 0 0 1-20-20v-44h-24v44a20.1 20.1 0 0 1-20 20H48a20.1 20.1 0 0 1-20-20v-92.5a20 20 0 0 1 6.6-14.8L114.5 28a20 20 0 0 1 27 0l80 72.7a20.3 20.3 0 0 1 6.5 14.8V208a20.1 20.1 0 0 1-20 20Zm-44-24h40v-86.7l-76-69.1l-76 69.1V204h40v-44a20.1 20.1 0 0 1 20-20h32a20.1 20.1 0 0 1 20 20Z"
    />
  </svg>
</template>
