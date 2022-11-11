<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '/',
  },
})
</script>

<template>
  <Card>
    <CardLink :href="href" class="flex items-center !justify-center">
      <slot />
    </CardLink>
  </Card>
</template>
