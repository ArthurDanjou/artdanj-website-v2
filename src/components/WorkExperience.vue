<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const props = defineProps({
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  beginDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
})

const { getTheme, getTextColor } = useTheme()

const getEndDate = computed(() => {
  return props.endDate === 'Today'
    ? t('date.today')
    :`${t(`months.${props.endDate.split('/')[0]}`)} ${props.endDate.split('/')[1]}`
})

const getBeginDate = computed(() => {
  return `${t(`months.${props.endDate.split('/')[0]}`)} ${props.endDate.split('/')[1]}`
})
</script>

<template>
  <div>
    <div>
      <div v-if="url" class="text-lg">
        <Link :href="url" target="_blank" :color="getTheme">
          {{ company }}
        </Link> - <span class="text-gray-700 dark:text-gray-300">{{ title }}</span>
      </div>
      <h1 v-else class="text-lg">
        <span class="font-medium text-black dark:text-white">{{ company }}</span> - <span class="text-gray-700 dark:text-gray-300">{{ title }}</span>
      </h1>
      <h3 v-if="getBeginDate === getEndDate" class="text-sm text-gray-500 dark:text-gray-400 my-1">
        {{ 'date.in' }} {{ getEndDate }} <span class="mx-2">|</span> {{ location }}
      </h3>
      <h3 v-else class="text-sm text-gray-500 dark:text-gray-400 my-1">
        {{ 'date.from' }} {{ getBeginDate }} {{ 'date.to' }} {{ getEndDate }} <span class="mx-2">|</span> {{ location }}
      </h3>
    </div>
    <p class="text-justify text-md leading-5 dark:text-gray-300">
      <slot />
    </p>
  </div>
</template>
