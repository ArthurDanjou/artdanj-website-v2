<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Home',
  },
})
</script>

<template>
  <h1 class="font-bold text-gray-200 dark:text-zinc-800 text-14xl text-center mb-16">
    {{ title }}
  </h1>
</template>
