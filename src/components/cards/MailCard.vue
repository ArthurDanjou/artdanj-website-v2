<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import {useI18n} from "vue-i18n";
const { getTheme, getTextColor } = useTheme()
const { t } = useI18n()
</script>

<template>
  <Card width="2">
    <CardLink href="mailto:contact@arthurdanjou.fr">
      <Icon name="material-symbols:alternate-email-rounded" size="42px" :class="getTextColor()" />
      <h3 class="subtitle">
        {{ t('cards.mail') }}
      </h3>
      <Link class="title" link="mailto:contact@arthurdanjou.fr" :color="getTheme" :group="true">
        contact@arthurdanjou.fr
      </Link>
      <CardButton />
    </CardLink>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-xl lg:text-3xl font-bold mb-8;
}

.subtitle {
  @apply mt-4 mb-2 text-sm text-gray-600 dark:text-gray-400 uppercase;
}
</style>
