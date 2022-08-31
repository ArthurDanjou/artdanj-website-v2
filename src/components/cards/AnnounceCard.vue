<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

const { data } = await useAsyncData('announce', () => $fetch('/api/announces'))
</script>

<template>
  <Card width="2">
    <CardDiv>
      <SpeakerIcon :class="getTextColor()" />
      <h3 class="subtitle">
        What are the latest news ?
      </h3>
      <h1 v-if="data" class="title">
        {{ data.content }}
      </h1>
      <h1 v-else class="title">
        Welcome to the website !
      </h1>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold mb-8;
}

.subtitle {
  @apply mt-4 mb-2 text-sm text-stone-500 dark:text-gray-400 uppercase;
}
</style>
