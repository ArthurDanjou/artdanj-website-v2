<script setup lang="ts">
import { formatDate } from '~/logic/date'

defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  location: {
    type: String,
    default: 'Location',
  },
  beginDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <div>
      <h1 class="text-lg leading-5">
        <strong>{{ title }}</strong>, {{ location }}
      </h1>
      <h3 class="my-1 text-sm text-gray-500 dark:text-gray-400">
        {{ 'date.from' }} {{ formatDate(beginDate) }} {{ 'date.to' }} {{ formatDate(endDate) }}
      </h3>
    </div>
    <p class="text-justify text-md leading-5 dark:text-gray-300">
      <slot />
    </p>
  </div>
</template>
