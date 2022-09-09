<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()
const { t, setLocaleMessage } = useI18n()
const { data } = await useAsyncData('announce', async () => {
  const announce = await $fetch('/api/announces')
  setLocaleMessage('en', {
    message: data.value.english_content,
  })
  setLocaleMessage('fr', {
    message: data.value.french_content,
  })
  return announce
})
</script>

<template>
  <Card width="2">
    <CardDiv>
      <Icon name="tabler:speakerphone" size="42px" :class="getTextColor()" />
      <h3 class="subtitle">
        {{ t('cards.announces.title') }}
      </h3>
      <h1 v-if="data" class="title">
        {{ t(data.title) }}
      </h1>
      <h1 v-else class="title">
        {{ t('cards.announces.default') }}
      </h1>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold mb-8;
}

.subtitle {
  @apply mt-4 mb-2 text-sm text-gray-600 dark:text-gray-400 uppercase;
}
</style>
