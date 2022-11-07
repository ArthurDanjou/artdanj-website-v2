<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLink :href="href" :target="blank ? '_blank' : '_self'">
    <div class="duration-500 underline underline-offset-4 decoration-gray-300 underline-opacity-25 hover:(decoration-black underline-opacity-100) rounded-sm dark:(decoration-gray-600 hover:decoration-white)">
      <slot />
    </div>
  </NuxtLink>
</template>
