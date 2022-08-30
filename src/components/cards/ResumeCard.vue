<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getTextColor } = useTheme()
</script>

<template>
  <Card :order="1">
    <CardLink href="resume" class="flex flex-col justify-center">
      <PersonBoxIcon :class="getTextColor()" />
      <h3 class="subtitle">
        Learn more about me
      </h3>
      <h1 class="title">
        See my resume
      </h1>
      <CardButton />
    </CardLink>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bolder mb-8;
}

.subtitle {
  @apply mt-4 mb-2 text-sm text-stone-500 dark:text-gray-400 uppercase;
}
</style>
