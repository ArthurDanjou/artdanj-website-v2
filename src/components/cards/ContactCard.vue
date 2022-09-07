<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()
const { t } = useI18n()
</script>

<template>
  <Card order="last">
    <CardLink href="contact">
      <Icon name="material-symbols:inbox-outline" size="42px" :class="getTextColor()" />
      <h3 class="subtitle">
        {{ t('cards.contact.subtitle') }}
      </h3>
      <h1 class="title">
        {{ t('cards.contact.title') }}
      </h1>
      <CardButton />
    </CardLink>
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
