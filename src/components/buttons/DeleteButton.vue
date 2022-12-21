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
  <Button :content="content" :thin="thin" class="text-white" color="red" icon="ph:trash-bold"/>
</template>
