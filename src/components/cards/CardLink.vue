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
  <NuxtLink
      :href="href"
      :target="target"
      class="relative overflow-hidden shadow-card dark:shadow-card-dark hover:transform hover:translate-y-0.5 hover:shadow-none dark:hover:shadow-none duration-300 rounded-xl group p-8 w-full h-full flex flex-col justify-center space-y-8"
  >
    <slot />
  </NuxtLink>
</template>
