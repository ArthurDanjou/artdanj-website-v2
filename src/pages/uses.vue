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
    <div class="flex justify-center">
      <ContentDoc class="w-1/2 prose" path="/uses" />
    </div>
  </section>
</template>
