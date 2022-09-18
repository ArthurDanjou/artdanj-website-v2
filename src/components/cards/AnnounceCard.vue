<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAsyncData } from '#imports'
import type { Announcement } from '~/types/types'

const { t, mergeLocaleMessage } = useI18n()
const { data: announce } = await useAsyncData('announce', async () => {
  const announce = await $fetch<Announcement>('/api/announces')
  mergeLocaleMessage('en', {
    [announce.title]: announce.english_content,
  })
  mergeLocaleMessage('fr', {
    [announce.title]: announce.french_content,
  })
  return announce
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
          {{ t(announce.title) }}
        </h1>
        <h1 v-else class="title">
          {{ t('cards.announces.default') }}
        </h1>
        <h3 class="subtitle">
          {{ t('cards.announces.title') }}
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
