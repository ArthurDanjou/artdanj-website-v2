<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'

defineProps({
  title: {
    default: 'Title',
    required: true,
    type: String,
  },
})

const { getBackgroundColor } = useTheme()

const { t } = useI18n()
</script>

<template>
  <h3>
    <span :class="getBackgroundColor()" class="pl-1 pr-4 title py-1 font-bold text-xl relative">
      {{ t(title) }}
    </span>
  </h3>
</template>
