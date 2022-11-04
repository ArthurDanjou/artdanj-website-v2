<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: 'mdi:help-circle-outline',
  },
  size: {
    type: Number,
    default: 72,
  },
})
</script>

<template>
  <div class="z-11 flex justify-center mt-8">
    <Icon :name="icon" :size="`${size}px`" />
  </div>
</template>
