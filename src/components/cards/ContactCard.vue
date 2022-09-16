<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Card order="last">
    <CardLink href="contact">
      <CardIcon>
        <Icon name="material-symbols:inbox-outline" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
        <h1 class="title">
          {{ t('cards.contact.title') }}
        </h1>
        <h3 class="subtitle">
          {{ t('cards.contact.subtitle') }}
        </h3>
      </div>
      <CardButton />
    </CardLink>
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
