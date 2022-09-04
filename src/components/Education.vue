<script setup lang="ts">
const props = defineProps({
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

const getEndDate = computed(() => {
  // todo translate
  return props.endDate === 'Today'
    ? 'date.today'
    : `months.${props.endDate.split('/')[0]} ${props.endDate.split('/')[1]}`
})

const getBeginDate = computed(() => {
  return `months.${props.beginDate.split('/')[0]} ${props.beginDate.split('/')[1]}`
})
</script>

<template>
  <div>
    <div>
      <h1 class="text-lg leading-5">
        <strong>{{ title }}</strong>, {{ location }}
      </h1>
      <h3 class="my-1 text-sm text-gray-500 dark:text-gray-400">
        {{ 'date.from' }} {{ getBeginDate }} {{ 'date.to' }} {{ getEndDate }}
      </h3>
    </div>
    <p class="text-justify text-md leading-5 dark:text-gray-300">
      <slot />
    </p>
  </div>
</template>
