<script setup lang="ts">
defineProps({
  title: {
    default: 'Title',
    required: true,
  },
  content: {
    default: 'Content',
    required: true,
  },
})
</script>

<template>
  <div class="mb-2">
    <strong class="mr-2">{{ title }}</strong><span class="dark:text-gray-200">{{ content }}</span>
  </div>
</template>
