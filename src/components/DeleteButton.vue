<script setup lang="ts">
defineProps({
  content: String,
  big: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    v-if="content"
    :class="big ? 'py-1 px-2 text-sm' : 'px-1 py-0.5 text-xxs'"
    class="flex items-center justify-center border border-.5 border-red-500 rounded-md bg-red-400/20 text-red-500 cursor-pointer duration-300 font-bold hover:(bg-red-600 text-white)"
  >
    {{ content }}
  </div>
  <div
    v-else
    :class="big ? 'py-1 px-2 text-sm' : 'px-1 py-0.5 text-xxs'"
    class="flex items-center justify-center border border-.5 border-red-500 rounded-md bg-red-400/20 text-red-500 cursor-pointer duration-300 font-bold hover:(bg-red-600 text-white)"
  >
    <Icon name="ph:trash-bold" size="16" />
  </div>
</template>
