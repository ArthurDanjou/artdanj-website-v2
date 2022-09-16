<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  title: {
    default: 'Title',
    required: true,
    type: String,
  },
})

const { t } = useI18n()
</script>

<template>
  <h3>
    <span class="pl-1 pr-4 title py-1 font-bold text-xl relative bg-black text-white dark:(bg-white text-black)">
      {{ t(title) }}
    </span>
  </h3>
</template>
