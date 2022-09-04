<script setup lang="ts">
import {useI18n} from "vue-i18n";

defineProps({
  title: {
    type: String,
    default: 'Home',
  },
})

const { t } = useI18n()
</script>

<template>
  <h1 class="font-bold text-gray-200 dark:text-zinc-800 text-6xl md:text-8xl lg:text-14xl text-center mb-16">
    {{ t(`titles.${title}`) }}
  </h1>
</template>
