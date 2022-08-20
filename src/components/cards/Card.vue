<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: '1',
  },
  width: {
    type: String,
    default: '1',
  },
})

const getHeight = computed(() => {
  switch (props.height) {
    case '1':
      return 'row-span-1'
    case '2':
      return 'row-span-2'
  }
})

const getWidth = computed(() => {
  switch (props.width) {
    case '1':
      return 'col-span-1'
    case '2':
      return 'col-span-2'
    case '3':
      return 'col-span-3'
  }
})
</script>

<template>
  <div
    class="relative rounded-28px flex flex-col
    border border-dark bg-white dark:bg-dark-800 h-full w-full"
    :class="[getHeight, getWidth]"
  >
    <slot />
  </div>
</template>
