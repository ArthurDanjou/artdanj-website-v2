<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Home',
  },
})
</script>

<template>
  <h1 class="font-bold text-gray-200 dark:text-zinc-800 text-6xl md:text-8xl lg:text-14xl text-center mt-6 mb-8">
    {{ title }}
  </h1>
</template>
