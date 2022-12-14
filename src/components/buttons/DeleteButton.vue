<script setup lang="ts">
defineProps({
  content: String,
  thin: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <Button :content="content" icon="ph:trash-bold" color="red" :thin="thin" />
</template>
