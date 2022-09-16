<script setup lang="ts">
defineProps({
  stick: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex" :class="stick ? '' : 'mb-8'">
    <div class="p-1 rounded-lg bg-stone-100 dark:bg-dark-600 shadow-dark">
      <slot />
    </div>
  </div>
</template>
