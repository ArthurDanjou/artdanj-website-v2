<script setup lang="ts">
import { computed } from '#imports'

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
  if (props.group)
    return 'underline underline-offset-4 decoration-gray-300 underline-opacity-25 group-hover:(decoration-black underline-opacity-100) rounded-sm dark:(decoration-gray-600 group-hover:decoration-white)'
  else
    return 'underline underline-offset-4 decoration-gray-300 underline-opacity-25 hover:(decoration-black underline-opacity-100) rounded-sm dark:(decoration-gray-600 hover:decoration-white)'
})
</script>

<template>
  <NuxtLink
    :to="link"
    :target="target"
    class="flex"
  >
    <div class="duration-500" :class="getColor">
      <slot />
    </div>
  </NuxtLink>
</template>
