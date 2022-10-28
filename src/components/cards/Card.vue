<script setup lang="ts">
import { computed } from '#imports'

const props = defineProps({
  height: {
    type: String,
    default: '1',
  },
  width: {
    type: String,
    default: '1',
  },
  order: {
    type: String,
    enum: ['first', 'normal', 'last'],
    default: 'normal',
  },
})

const getRow = computed(() => {
  switch (props.height) {
    case '1':
      return 'row-span-1'
    case '2':
      return 'lg:row-span-2'
  }
})

const getColumn = computed(() => {
  switch (props.width) {
    case '1':
      return 'lg:col-span-1'
    case '2':
      return 'lg:col-span-2'
    case '3':
      return 'lg:col-span-3'
  }
})

const getOrder = computed(() => {
  switch (props.order) {
    case 'first':
      return 'first-order'
    case 'last':
      return 'last-order'
    case 'normal':
      return 'order-normal'
  }
})
</script>

<template>
  <div
    class="card relative rounded-12px flex flex-col
    border border-dark bg-white dark:bg-dark-900 w-full h-full"
    :class="[getRow, getColumn, getOrder]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.first-order {
  order: -9999;
}
.last-order {
  order: 9999;
}

@media (min-width: 768px) {
  .first-order {
    order: 0;
  }
  .last-order {
    order: 0;
  }
}
</style>
