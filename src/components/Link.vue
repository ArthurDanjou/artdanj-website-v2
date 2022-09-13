<script setup lang="ts">
import {useTheme} from "#imports";

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

const { getTheme } = useTheme()

const getColor = computed(() => {
  if (props.group) {
    switch (getTheme.value) {
      case 'sky':
        return 'decoration-sky-500 group-hover:text-sky-500 group-hover:decoration-sky-500/30 focus:text-sky-500 focus:ring-sky-500/40\n'
            + 'dark:(decoration-sky-400 group-hover:text-sky-400 group-hover:decoration-sky-400/30 focus:text-sky-400 focus:ring-sky-400/40)'
      case 'orange':
        return 'decoration-orange-500 group-hover:text-orange-500 group-hover:decoration-orange-500/30 focus:text-orange-500 focus:ring-orange-500/40\n'
            + 'dark:(decoration-orange-400 group-hover:text-orange-400 group-hover:decoration-orange-400/30 focus:text-orange-400 focus:ring-orange-400/40)'
      case 'yellow':
        return 'decoration-yellow-500 group-hover:text-yellow-500 group-hover:decoration-yellow-500/30 focus:text-yellow-500 focus:ring-yellow-500/40\n'
            + 'dark:(decoration-yellow-400 group-hover:text-yellow-400 group-hover:decoration-yellow-400/30 focus:text-yellow-400 focus:ring-yellow-400/40)'
      case 'lime':
        return 'decoration-lime-500 group-hover:text-lime-500 group-hover:decoration-lime-500/30 focus:text-lime-500 focus:ring-lime-500/40\n'
            + 'dark:(decoration-lime-400 group-hover:text-lime-400 group-hover:decoration-lime-400/30 focus:text-lime-400 focus:ring-lime-400/40)'
      case 'violet':
        return 'decoration-violet-500 group-hover:text-violet-500 group-hover:decoration-violet-500/30 focus:text-violet-500 focus:ring-violet-500/40\n'
            + 'dark:(decoration-violet-400 group-hover:text-violet-400 group-hover:decoration-violet-400/30 focus:text-violet-400 focus:ring-violet-400/40)'
      case 'red':
        return 'decoration-red-500 group-hover:text-red-500 group-hover:decoration-red-500/30 focus:text-red-500 focus:ring-red-500/40\n'
            + 'dark:(decoration-red-400 group-hover:text-red-400 group-hover:decoration-red-400/30 focus:text-red-400 focus:ring-red-400/40)'
    }
  }
  else {
    switch (getTheme.value) {
      case 'sky':
        return 'decoration-sky-500 hover:text-sky-500 hover:decoration-sky-500/30 focus:text-sky-500 focus:ring-sky-500/40\n'
            + 'dark:(decoration-sky-400 hover:text-sky-400 hover:decoration-sky-400/30 focus:text-sky-400 focus:ring-sky-400/40)'
      case 'orange':
        return 'decoration-orange-500 hover:text-orange-500 hover:decoration-orange-500/30 focus:text-orange-500 focus:ring-orange-500/40\n'
            + 'dark:(decoration-orange-400 hover:text-orange-400 hover:decoration-orange-400/30 focus:text-orange-400 focus:ring-orange-400/40)'
      case 'yellow':
        return 'decoration-yellow-500 hover:text-yellow-500 hover:decoration-yellow-500/30 focus:text-yellow-500 focus:ring-yellow-500/40\n'
            + 'dark:(decoration-yellow-400 hover:text-yellow-400 hover:decoration-yellow-400/30 focus:text-yellow-400 focus:ring-yellow-400/40)'
      case 'lime':
        return 'decoration-lime-500 hover:text-lime-500 hover:decoration-lime-500/30 focus:text-lime-500 focus:ring-lime-500/40\n'
            + 'dark:(decoration-lime-400 hover:text-lime-400 hover:decoration-lime-400/30 focus:text-lime-400 focus:ring-lime-400/40)'
      case 'violet':
        return 'decoration-violet-500 hover:text-violet-500 hover:decoration-violet-500/30 focus:text-violet-500 focus:ring-violet-500/40\n'
            + 'dark:(decoration-violet-400 hover:text-violet-400 hover:decoration-violet-400/30 focus:text-violet-400 focus:ring-violet-400/40)'
      case 'red':
        return 'decoration-red-500 hover:text-red-500 hover:decoration-red-500/30 focus:text-red-500 focus:ring-red-500/40\n'
            + 'dark:(decoration-red-400 hover:text-red-400 hover:decoration-red-400/30 focus:text-red-400 focus:ring-red-400/40)'
    }
  }
})
</script>

<template>
  <NuxtLink
    :href="props.link"
    :target="props.target"
    class="focusable rounded-sm font-medium text-zinc-800 dark:text-white
      underline decoration-2 underline-offset-2 font-bold duration-300"
    :class="getColor"
  >
    <slot />
  </NuxtLink>
</template>
