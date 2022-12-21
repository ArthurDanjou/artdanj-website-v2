<script setup lang="ts">
defineProps({
  isRoute: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center relative">
    <slot />
    <div class="absolute" :class="{ indicator: isRoute }" />
  </div>
</template>

<style lang="scss">
.indicator {
  @apply duration-300 w-[4px] h-[4px] rounded-[4px] bg-black dark:bg-white mt-2 z-20 -bottom-[0.45rem];
}
</style>
