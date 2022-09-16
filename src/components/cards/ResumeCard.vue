<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Card order="last">
    <CardLink href="resume" class="flex flex-col justify-center">
      <CardIcon>
        <Icon name="fluent:person-12-regular" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
        <h1 class="title">
          {{ t('cards.resume.title') }}
        </h1>
        <h3 class="subtitle">
          {{ t('cards.resume.subtitle') }}
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
