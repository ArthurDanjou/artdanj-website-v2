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
  <NuxtLink :target="target" :href="href" class="group p-8 w-full h-full flex flex-col justify-center">
    <slot />
  </NuxtLink>
</template>
