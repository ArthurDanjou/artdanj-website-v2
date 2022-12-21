<script setup lang="ts">
defineProps({
  title: {
    default: 'Title',
    required: true,
    type: String,
  },
})
</script>

<template>
  <h3>
    <span class="pl-1 pr-4 title py-1 font-bold text-xl relative bg-black text-white dark:bg-white dark:text-black">
      {{ title }}
    </span>
  </h3>
</template>
