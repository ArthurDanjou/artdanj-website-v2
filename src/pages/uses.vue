<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import {useI18n} from "vue-i18n";

const { getTextColor } = useTheme()

const { t } = useI18n()

useHead({
  title: t('head.uses'),
})
</script>

<template>
  <section>
    <PageTitle title="uses" />
  </section>
</template>
