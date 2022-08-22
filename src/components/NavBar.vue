<script setup lang="ts">
import { useThemeStore } from '~/store/theme'
import { THEMES } from '~/types/themes'

const color = useColorMode()

const playAnimation = (id) => {
  const element = document.getElementById(id)
  element.style.transform = 'translateY(-75%) rotate(90deg)'
  setTimeout(() => {
    element.style.transform = 'translateY(0) rotate(0)'
  }, 300)
}

const toggleColorMode = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
  playAnimation('color')
}

const language = ref('fr')
const changeLanguage = () => {
  // todo import nuxt-i18n
  playAnimation('lang')
  language.value = language.value === 'fr' ? 'en' : 'fr'
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

const isMuted = ref(false)
const toggleMute = () => {
  isMuted.value = !isMuted.value
  playAnimation('sound')
}
</script>

<template>
  <!-- todo add overflow, add tooltip, fix nuxt-active-link for blog -->
  <div class="duration-300 z-10 fixed bottom-4 left-1/2 p-4 transform -translate-x-1/2 flex gap-2">
    <transition name="arrow">
      <div v-if="isBlog" class="cursor-pointer nav-container group" @click.prevent="goBack">
        <div class="h-44px w-44px p-2 duration-300 rounded-xl bg-stone-200 text-black dark:(text-white bg-dark-900) text-black dark:text-white flex items-center justify-center">
          <ArrowLeftIcon class="duration-500 group-hover:opacity-50 text-2xl" />
        </div>
      </div>
    </transition>
    <nav class="nav-container">
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
      <div class="bg-stone-200 dark:bg-dark-300 w-1px mx-2 h-7/8" />
      <div id="color" class="nav-link h-44px w-44px" @click.prevent="toggleColorMode()">
        <ColorModeIcon :light="color.preference !== 'light'" class="text-2xl" />
      </div>
      <div id="theme" class="nav-link h-44px w-44px" @click.prevent="toggleColorTheme()">
        <PaintBrushIcon class="text-2xl" />
      </div>
      <div id="lang" class="nav-link h-44px w-44px text-center" @click.prevent="changeLanguage()">
        <TranslationIcon :lang="language" />
      </div>
      <div id="sound" class="nav-link h-44px w-44px text-center" @click.prevent="toggleMute()">
        <SoundIcon :muted="isMuted" class="text-2xl" />
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.nav-container {
  @apply flex items-center shadow-nav-dark w-full bg-white dark:(bg-dark-800 shadow-nav-light) border-dark border rounded-16px flex justify-center p-12px gap-2;
}

.nav-link {
  @apply p-2 border-2 border-transparent cursor-pointer duration-500 hover:(text-black dark:text-white) rounded-xl bg-stone-200 text-stone-400 dark:(text-stone-600 bg-dark-900);

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
