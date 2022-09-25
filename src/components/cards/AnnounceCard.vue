<script setup lang="ts">
import { useAsyncData } from '#imports'
import type { Announcement } from '~/types/types'

const { data: announce } = await useAsyncData('announce', async () => {
  return $fetch<Announcement>('/api/announces')
})
</script>

<template>
  <Card order="first" width="2">
    <CardDiv>
      <CardIcon>
        <Icon name="tabler:speakerphone" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
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
