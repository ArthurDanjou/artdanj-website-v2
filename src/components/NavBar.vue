<script setup lang="ts">
import { computed, useColorMode, useRouter, useSupabase, useSupabaseUser } from '#imports'

const color = useColorMode()
const user = useSupabaseUser() // todo users store users
const { logout, isLoggedIn } = useSupabase()

const playAnimation = (id: any) => {
  const element: HTMLElement | null = document.getElementById(id)
  element!.style.transform = 'translateY(-75%) rotate(90deg)'
  setTimeout(() => {
    element!.style.transform = 'translateY(0) rotate(0)'
  }, 400)
}

const toggleColorMode = () => {
  playAnimation('color')
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const router = useRouter()
const goBack = () => {
  router.back()
}

const handleLogout = async () => {
  if (router.currentRoute.value.path === '/users')
    await router.push('/')
  await logout()
}

const isRoute = (route: string) => {
  const currentRoutePath = router.currentRoute.value.path
  return currentRoutePath === route || (currentRoutePath.startsWith(route) && route !== '/')
}

const isBlog = computed(() => isRoute('/blog/'))
const isAMA = computed(() => isRoute('/ama/'))
const isUser = computed(() => isRoute('/users/'))
</script>

<template>
  <!-- add tooltip -->
  <div class="z-100 fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 width">
    <transition name="arrow">
      <div v-if="isBlog || isAMA" class="cursor-pointer nav-container group" @click.prevent="goBack">
        <div class="h-44px w-44px p-2 duration-300 rounded-xl bg-stone-200 text-black dark:(text-white bg-dark-900) text-black dark:text-white flex items-center justify-center">
          <Icon name="humbleicons:arrow-go-back" size="24px" class="duration-500 group-hover:opacity-50 text-2xl" />
        </div>
      </div>
    </transition>
    <nav class="nav-container overflow-x-auto sm:overflow-x-hidden">
      <NavBarItem :is-route="isRoute('/')">
        <NuxtLink to="/" class="nav-link">
          <HouseIcon :filled="isRoute('/')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/about')">
        <NuxtLink to="/about" class="nav-link">
          <PersonIcon :filled="isRoute('/about')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/blog')">
        <NuxtLink to="/blog" class="nav-link" :class="{ 'router-link-exact-active': isBlog }">
          <PencilIcon :filled="isRoute('/blog')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/projects')">
        <NuxtLink to="/projects" class="nav-link">
          <FlaskIcon :filled="isRoute('/projects')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/resume')">
        <NuxtLink to="/resume" class="nav-link">
          <MailIcon :filled="isRoute('/resume')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/contact')">
        <NuxtLink to="/contact" class="nav-link">
          <PinIcon :filled="isRoute('/contact')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/uses')">
        <NuxtLink to="/uses" class="nav-link">
          <WrenchIcon :filled="isRoute('/uses')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/talents')">
        <NuxtLink to="/talents" class="nav-link">
          <CrownIcon :filled="isRoute('/talents')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <div class="bg-stone-200 dark:bg-dark-300 w-1px mx-2 h-40px flex-shrink-0" />
      <NavBarItem :is-route="isRoute('/guestbook')">
        <NuxtLink to="/guestbook" class="nav-link">
          <BookIcon :filled="isRoute('/guestbook')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <NavBarItem :is-route="isRoute('/ama')">
        <NuxtLink to="/ama" class="nav-link" :class="{ 'router-link-exact-active': isAMA }">
          <ChatIcon :filled="isRoute('/ama')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <div class="bg-stone-200 dark:bg-dark-300 w-1px mx-2 h-40px flex-shrink-0" />
      <div id="color" class="nav-link h-44px w-44px" @click.prevent="toggleColorMode">
        <Icon v-if="color.preference === 'light'" name="ph:sun-bold" size="24px" />
        <Icon v-else name="pepicons:moon" size="24px" />
      </div>
      <NavBarItem v-if="isLoggedIn" :is-route="isRoute('/users')">
        <NuxtLink :to="`/user/${user.user_metadata.nickname}`" class="nav-link" :class="{ 'router-link-exact-active': isUser }">
          <UserIcon :filled="isRoute('/users')" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
      <div v-if="isLoggedIn" class="nav-link" @click.prevent="handleLogout">
        <Icon name="material-symbols:logout" size="24px" class="text-2xl" />
      </div>
      <NavBarItem v-else :is-route="isRoute('/login')">
        <NuxtLink to="/login" class="nav-link">
          <Icon name="material-symbols:login" size="24px" class="text-2xl" />
        </NuxtLink>
      </NavBarItem>
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
  @apply z-11 flex items-center shadow-nav-dark bg-white dark:(bg-dark-800 shadow-nav-light) border-dark border rounded-16px flex p-10px gap-2;
}

.nav-link {
  @apply z-11 p-2 border-2 border-transparent cursor-pointer duration-500 hover:(text-black dark:text-white) rounded-lg bg-stone-200 text-stone-400 dark:(text-stone-600 bg-dark-900)  flex items-center justify-center;

  &.router-link-exact-active, &.router-link-active {
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
