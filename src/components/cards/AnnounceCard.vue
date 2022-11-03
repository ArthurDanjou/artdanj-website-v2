<script setup lang="ts">
import { useAsyncData } from '#imports'
import type { Announcement } from '~/types/types'

const { data: announce, pending } = await useAsyncData('announce', async () => {
  return $fetch<Announcement>('/api/announces')
})
</script>

<template>
  <Card order="first" width="2">
    <CardDiv v-if="pending">
      <CardIcon style="animation: spin 2s infinite" icon="ph:spinner-bold" />
      <div class="flex flex-col space-y-4">
        <h1 class="title">
          Loading state...
        </h1>
        <h3 class="subtitle">
          Fetching announcement from database
        </h3>
      </div>
    </CardDiv>
    <CardDiv v-else>
      <CardIcon icon="tabler:speakerphone" />
      <div class="flex flex-col space-y-4 text-center">
        <h1 v-if="announce" class="title">
          {{ announce.content }}
        </h1>
        <h1 v-else class="title">
          Welcome to my new website !
        </h1>
        <h3 class="subtitle">
          What are the latest news ?
        </h3>
      </div>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}
</style>
