<template>
  <div
    class="cursor-pointer p-2 bg-stone-100 absolute -right-2 -top-2 rounded-xl flex items-center justify-center duration-300 shadow-xl text-gray-600 dark:(bg-dark-800 text-gray-400 hover:text-white) hover:(-top-1.5 -right-1.5 shadow-md text-black)"
    @click.prevent="$emit('close', true)"
  >
    <Icon name="maki:cross" size="16" />
  </div>
</template>
