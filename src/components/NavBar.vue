<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/store/theme'
import { THEMES } from '~/types/themes'

const color = useColorMode()

const playAnimation = (id) => {
  const element = document.getElementById(id)
  element.style.transform = 'translateY(-75%) rotate(90deg)'
  setTimeout(() => {
    element.style.transform = 'translateY(0) rotate(0)'
  }, 400)
}

const toggleColorMode = () => {
  playAnimation('color')
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const { locale } = useI18n()
const changeLanguage = () => {
  playAnimation('lang')
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const themeStore = useThemeStore()
const toggleColorTheme = () => {
  const nextTheme = THEMES[(THEMES.indexOf(themeStore.theme) + 1) % THEMES.length]
  themeStore.setTheme(nextTheme)
  playAnimation('theme')
  return nextTheme
}

const router = useRouter()
const goBack = () => {
  router.push('/blog')
}

const isBlog = computed(() => {
  return router.currentRoute.value.path.includes('/blog/')
})

const isRoute = (route: string) => {
  const currentRoutePath = router.currentRoute.value.path
  return currentRoutePath === route || (currentRoutePath.includes(route) && route !== '/')
}
</script>

<template>
  <!-- todo add overflow, add tooltip -->
  <div class="duration-300 z-10 fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 width">
    <transition name="arrow">
      <div v-if="isBlog" class="cursor-pointer nav-container group" @click.prevent="goBack">
        <div class="h-44px w-44px p-2 duration-300 rounded-xl bg-stone-200 text-black dark:(text-white bg-dark-900) text-black dark:text-white flex items-center justify-center">
          <ArrowLeftIcon class="duration-500 group-hover:opacity-50 text-2xl" />
        </div>
      </div>
    </transition>
    <nav class="nav-container overflow-x-auto sm:overflow-x-hidden">
      <NuxtLink to="/" class="nav-link">
        <HouseIcon :filled="isRoute('/')" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="/about" class="nav-link">
        <PersonIcon :filled="isRoute('/about')" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="/blog" class="nav-link" :class="{ 'router-link-exact-active': isRoute('/blog') }">
        <PencilIcon :filled="isRoute('/blog')" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="/projects" class="nav-link">
        <LightningIcon :filled="isRoute('/projects')" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="/resume" class="nav-link">
        <MailIcon :filled="isRoute('/resume')" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="/contact" class="nav-link">
        <PinIcon :filled="isRoute('/contact')" class="text-2xl" />
      </NuxtLink>
      <div class="bg-stone-200 dark:bg-dark-300 w-1px mx-2 h-40px flex-shrink-0" />
      <div id="color" class="nav-link h-44px w-44px" @click.prevent="toggleColorMode()">
        <ColorModeIcon :light="color.preference !== 'light'" class="text-2xl" />
      </div>
      <div id="theme" class="nav-link h-44px w-44px" @click.prevent="toggleColorTheme()">
        <PaintBrushIcon class="text-2xl" />
      </div>
      <div id="lang" class="nav-link h-44px w-44px text-center" @click.prevent="changeLanguage()">
        <TranslationIcon :lang="locale" />
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 560px) {
  .width {
    width: calc(100% - 32px);
  }
}

.nav-container {
  @apply z-11 flex items-center shadow-nav-dark bg-white dark:(bg-dark-800 shadow-nav-light) border-dark border rounded-16px flex p-12px gap-2;
}

.nav-link {
  @apply z-11 p-2 border-2 border-transparent cursor-pointer duration-500 hover:(text-black dark:text-white) rounded-xl bg-stone-200 text-stone-400 dark:(text-stone-600 bg-dark-900);

  &.router-link-exact-active {
    @apply border-stone-700 text-black dark:text-white dark:border-stone-300;
  }
}

.arrow-enter-from, .arrow-leave-to {
  transform: translateY(150%);
}

.arrow-enter-active, .arrow-leave-active {
  transition: transform .5s ease-out;
}
</style>
