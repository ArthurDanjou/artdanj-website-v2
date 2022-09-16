<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '/',
  },
  target: {
    type: String,
    default: '_self',
  },
})
</script>

<template>
  <NuxtLink :target="target" :href="href" class="group p-4 w-full h-full flex flex-col justify-between">
    <slot />
  </NuxtLink>
</template>
