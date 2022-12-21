<script setup lang="ts">
import { computed } from '#imports'

const props = defineProps({
  link: {
    type: String,
    default: 'https://arthurdanjou.fr',
  },
  target: {
    type: String,
    default: '_self',
    enum: ['_blank', '_parent', '_self', '_top'],
  },
  group: {
    type: Boolean,
    default: false,
  },
})

const getColor = computed(() => {
  if (props.group)
    return 'underline underline-offset-4 decoration-gray-300 underline-opacity-25 group-hover:decoration-black group-hover:underline-opacity-100 rounded-sm dark:decoration-gray-600 dark:group-hover:decoration-white'
  else
    return 'underline underline-offset-4 decoration-gray-300 underline-opacity-25 hover:decoration-black hover:underline-opacity-100 rounded-sm dark:decoration-gray-600 dark:hover:decoration-white'
})
</script>

<template>
  <NuxtLink
    :href="link"
    :target="target"
    class="flex duration-500"
    :class="getColor"
  >
    <slot />
  </NuxtLink>
</template>
