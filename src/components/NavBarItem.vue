<template>
  <div class="flex flex-col items-center relative">
    <slot />
    <div :class="{'indicator': isRoute}"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isRoute: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.indicator {
  @apply duration-300 absolute w-4px h-4px rounded-3px bg-black dark:bg-white mt-2 z-20 -bottom-2;
}
</style>
