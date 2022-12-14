<script setup lang="ts">
const props = defineProps({
  label: String,
  content: String,
  icon: String,
  message: String,
  color: String,
})

const emit = defineEmits(['update'])
const value = ref(props.content)
watch(value, (newValue) => {
  emit('update', newValue)
})

const hasIcon = computed(() => props.icon ? 'left-10' : 'left-4')
const isEmpty = computed(() => value.value!.length === 0 ? '' : 'opacity-0 transform translate-x-2')
const getColor = computed(() => {
  switch (props.color) {
    case 'red':
      return 'text-red-500'
    case 'green':
      return 'text-green-500'
  }
})
</script>

<template>
  <div class="w-full relative">
    <div class="w-full flex items-center group">
      <div v-if="icon"
           class="group-focus-within:-translate-x-1 group-focus-within:-translate-y-1 group-focus-within:transform group-focus-within:bg-stone-200 group-focus-within:shadow-lg dark:group-focus-within:bg-dark-400 dark:group-focus-within:shadow-lg duration-300 flex items-center justify-center p-2 absolute rounded-xl">
        <Icon :name="icon" size="20"/>
      </div>
      <input
          id="input"
          v-model="value"
          :class="icon ? 'pl-10' : ''"
          class="w-full rounded-lg px-4 py-2 focus:outline-0 bg-white dark:bg-dark-800"
      >
      <label
          :class="[hasIcon, isEmpty]"
          class="cursor-text absolute group-focus-within:opacity-0 group-focus-within:transform group-focus-within:translate-x-2 duration-300 text-gray-600 dark:text-gray-200 text-opacity-60"
          for="input"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="message" class="mt-1 text-sm italic duration-300" :class="getColor">
      {{ message }}
    </p>
  </div>
</template>
