<script setup lang="ts">
const props = defineProps({
  content: String || Number,
  icon: String,
  color: String,
  thin: Boolean,
  sendable: {
    type: Boolean,
    default: true,
  },
})

const getColor = computed(() => {
  switch (props.color) {
    case 'red':
      return 'bg-red-500 text-black hover:shadow-md hover:shadow-red-400 dark:hover:shadow-red-600'
    case 'green':
      return 'bg-green-500 text-black hover:shadow-md hover:shadow-green-400 dark:hover:shadow-green-600'
    default:
      return 'bg-stone-200 text-black hover:shadow-md hover:shadow-stone-300 dark:(bg-dark-400 text-white hover:shadow-dark-500)'
  }
})

const getThickness = computed(() => {
  return props.thin ? 'p-1' : 'p-2'
})

const isSendable = computed(() => {
  if (props.sendable)
    return 'hover:-translate-y-1 transform'
  else
    return 'cursor-not-allowed opacity-30 !shadow-none'
})
</script>

<template>
  <button class="rounded-xl duration-300" :class="[getColor, getThickness, isSendable]">
    <div class="flex items-center space-x-1">
      <Icon :name="icon" size="16" />
      <p v-if="content">
        {{ content }}
      </p>
    </div>
  </button>
</template>
