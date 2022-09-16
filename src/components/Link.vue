<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    default: 'https://arthurdanjou.fr',
  },
  target: {
    type: String,
    default: '_parent',
    enum: ['_blank', '_parent', '_self', '_top'],
  },
  group: {
    type: Boolean,
    default: false,
  },
})

const getColor = computed(() => {
  if (props.group) {
    return 'text-gray-600 decoration-gray-500 group-hover:text-black group-hover:decoration-gray-500/30 focus:text-gray-500 focus:ring-gray-500/40\n' +
        'dark:(text-gray-400 decoration-gray-300/30 group-hover:text-white group-hover:decoration-gray-600/30 group-hover:text-white focus:text-white focus:ring-gray-600/40)'
  }
  else {
    return 'text-gray-600 decoration-gray-500 hover:text-black hover:decoration-gray-500/30 focus:text-gray-500 focus:ring-gray-500/40\n' +
        'dark:(text-gray-400 decoration-gray-300/30 hover:text-white hover:decoration-gray-600/30 hover:text-white focus:text-white focus:ring-gray-600/40)'
  }
})
</script>

<template>
  <NuxtLink
    :href="link"
    :target="target"
    class="focusable rounded-sm font-medium
      underline decoration-2 underline-offset-2 font-bold duration-300"
    :class="getColor"
  >
    <slot />
  </NuxtLink>
</template>
