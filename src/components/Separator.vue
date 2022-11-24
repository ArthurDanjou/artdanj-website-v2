<template>
  <div class="relative border-t border-.5 border-gray-150 dark:border-zinc-800 pt-12 my-12">
    <div class="absolute left-1/2 -top-6 -translate-x-1/2 transform bg-gray-100 px-8 py-2 dark:bg-black duration-300">
      <slot name="icon" />
    </div>
    <slot />
  </div>
</template>
