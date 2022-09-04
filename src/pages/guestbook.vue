<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()

useHead({
  title: t('head.guestbook'),
})
</script>

<template>
  <main>
    <PageTitle title="guestbook" />
  </main>
</template>
