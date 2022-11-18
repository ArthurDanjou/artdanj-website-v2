<script setup lang="ts">
defineProps({
  subtitle: String,
})
</script>

<template>
  <p class="text-gray-600 dark:text-gray-400 text-justify mb-12">
    {{ subtitle }}
  </p>
</template>
