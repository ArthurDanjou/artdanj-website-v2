<script setup lang="ts">
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="flex items-center justify-center mt-8 mb-28">
    <div class="w-full duration-300 text-center flex flex-col md:flex-row md:justify-between items-center gap-y-2">
      <p class="subtitle">
        © {{ year }} ArtDanjProduction
      </p>
      <div class="flex gap-x-1">
        <p class="subtitle">
          Designed & Built by
        </p>
        <ALink class="text-sm" link="https://twitter.com/arthurdanj" target="_blank">
          Arthur Danjou
        </ALink>
      </div>
      <p class="subtitle flex gap-x-1 items-center">
        Made with
        <a href="https://v3.nuxtjs.org/" target="_blank" class="group flex gap-x-1 items-center">
          <span
              class="duration-300 text-black group-hover:text-nuxt group-hover:decoration-nuxt-light decoration-nuxt dark:text-white dark:group-hover:decoration-nuxt-dark underline underline-offset-4">Nuxt 3</span>
          <NuxtLogo/>
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}
</style>
