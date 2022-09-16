<script setup lang="ts">
import { useI18n } from 'vue-i18n'

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
  <Card order="first" width="2">
    <CardDiv>
      <CardIcon>
        <Icon name="tabler:speakerphone" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
        <h1 v-if="data" class="title">
          {{ t(data.title) }}
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
