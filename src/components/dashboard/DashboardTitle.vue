<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <h1 class="font-bold text-4xl mb-2">
    {{ title }}
  </h1>
</template>
