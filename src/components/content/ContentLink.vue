<script setup lang="ts">
defineProps({
  link: {
    type: String,
    default: 'https://arthurdanjou.fr',
  },
  target: {
    type: String,
    default: '_parent',
    enum: ['_blank', '_parent', '_self', '_top'],
  }
})

const getColor = computed(() => {
  return 'text-zinc-600 decoration-gray-500 hover:text-black hover:decoration-gray-500/30 focus:text-gray-500 focus:ring-gray-500/40\n'
      + 'dark:(text-zinc-400 decoration-gray-300/30 hover:text-white hover:decoration-gray-400/30 hover:text-white focus:text-white focus:ring-gray-400/40)'
})
</script>

<template>
  <NuxtLink
      :href="link"
      :target="target"
      class="focusable rounded-sm font-bold
      underline decoration-2 underline-offset-2 font-bold duration-300"
      :class="getColor"
  >
    <slot />
  </NuxtLink>
</template>
