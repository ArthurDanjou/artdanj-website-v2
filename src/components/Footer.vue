<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'
const { getTheme } = useTheme()
const year = computed(() => new Date().getFullYear())

const { t } = useI18n()
</script>

<template>
  <footer class="flex items-center justify-center mt-16 mb-36">
    <div class="w-full duration-300 text-center flex flex-col md:(flex-row justify-between) items-center gap-y-2">
      <p class="subtitle">
        © {{ year }} ArtDanjProduction
      </p>
      <div class="flex gap-x-1">
        <p class="subtitle">
          {{ t('footer.builtBy') }}
        </p>
        <Link class="text-sm" link="https://twitter.com/arthurdanj" target="_blank" :color="getTheme">
          Arthur Danjou
        </Link>
      </div>
      <p class="subtitle flex gap-x-1 items-center">
        {{ t('footer.madeWith') }}
        <a href="https://v3.nuxtjs.org/" target="_blank" class="group flex gap-x-1 items-center">
          <span class="font-bold duration-300 text-black group-hover:(text-nuxt decoration-nuxt-light) decoration-nuxt dark:(text-white group-hover:decoration-nuxt-dark) underline decoration-2 underline-offset-2">Nuxt 3</span><NuxtLogo />
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
