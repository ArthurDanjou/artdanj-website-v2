<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getTheme } = useTheme()
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="flex items-center justify-center mt-16 mb-36">
    <div class="w-full duration-300 text-center flex flex-col md:(flex-row justify-between) items-center gap-y-2">
      <p class="subtitle">
        © {{ year }} ArtDanjProduction
      </p>
      <div class="flex gap-x-1">
        <p class="subtitle">
          Designed & Built by
        </p>
        <Link class="text-sm" link="https://twitter.com/arthurdanj" target="_blank" :color="getTheme">
          Arthur Danjou
        </Link>
      </div>
      <p class="subtitle flex gap-x-1 items-center">
        Made with
        <a href="https://v3.nuxtjs.org/" target="_blank" class="flex gap-x-1 items-center">
          <span class="text-nuxt">Nuxt 3</span><NuxtIcon />
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bolder;
}

.subtitle {
  @apply text-sm text-stone-500 dark:text-gray-400;
}
</style>
