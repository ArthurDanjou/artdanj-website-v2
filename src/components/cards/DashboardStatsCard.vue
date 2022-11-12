<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <Card>
    <CardLink v-if="href" :href="href" class="flex items-center !justify-center !space-y-4">
      <slot />
    </CardLink>
    <CardDiv v-else class="flex items-center !justify-center !space-y-4">
      <slot />
    </CardDiv>
  </Card>
</template>
