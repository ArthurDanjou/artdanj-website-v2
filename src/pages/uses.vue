<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('head.uses'),
})
</script>

<template>
  <section>
    <PageTitle title="uses" />
    <ContentDoc path="/uses" />
  </section>
</template>
