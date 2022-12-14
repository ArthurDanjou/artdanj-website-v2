<script setup lang="ts">
import { definePageMeta, useHead, useSupabase } from '#imports'

useHead({
  title: 'Login - Arthur Danjou',
})

definePageMeta({
  middleware: 'navigation',
})

const { login, Providers } = useSupabase()
</script>

<template>
  <section>
    <PageTitle title="Login" />
    <div class="lg:flex items-center md:mx-16 my-12">
      <div class="lg:w-1/2">
        <div class="flex justify-center my-4">
          <div class="relative">
            <div class="bg-gray-200 dark:bg-zinc-800 target h-[250px] w-[250px]">
              <div class="bg-stone-100 dark:bg-black target h-[200px] w-[200px]">
                <div class="bg-gray-200 dark:bg-zinc-800 target h-[150px] w-[150px]">
                  <div class="bg-stone-100 dark:bg-black target h-[100px] w-[100px]">
                    <div class="p-2 bg-amber-400 rounded-full flex items-center justify-center">
                      <Icon class="text-white dark:text-dark-900" name="ant-design:fire-filled" size="32" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute -left-2">
                <div class="p-2 bg-pink-400 rounded-full flex items-center justify-center">
                  <Icon class="text-gray-200 dark:text-zinc-800" name="ant-design:like-filled" size="24" />
                </div>
              </div>
              <div class="absolute left-45 top-5">
                <div class="p-2 bg-purple-400 rounded-full flex items-center justify-center">
                  <Icon class="text-gray-200 dark:text-zinc-800" name="teenyicons:briefcase-alt-solid" size="24" />
                </div>
              </div>
              <div class="absolute bottom-5 left-45">
                <div class="p-2 bg-blue-400 rounded-full flex items-center justify-center">
                  <Icon class="text-gray-200 dark:text-zinc-800" name="ic:baseline-lightbulb" size="24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <h3 class="text-center font-bold text-xl">
          Sign in by using your favorite provider to connect with other users and write your own message in the guestbook, ask questions, and more!
        </h3>
        <p class="text-center italic text-sm mb-8 mt-2 text-gray-600 dark:text-gray-400">
          Your informations are only used to display your name and reply by email.
        </p>
        <div class="flex justify-center">
          <div class="flex space-x-2 md:space-x-8 flex-wrap">
            <button
              class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#333] text-white hover:shadow-md hover:shadow-[#333]"
              @click.prevent="login(Providers.GITHUB)"
            >
              <Icon class="text-white" name="mdi:github" size="48" />
            </button>
            <button
              class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#1DA1F2] text-white hover:shadow-md hover:shadow-[#1DA1F2]"
              @click.prevent="login(Providers.TWITTER)"
            >
              <Icon class="text-white" name="mdi:twitter" size="48" />
            </button>
            <button
              class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#DB4437] text-white hover:shadow-md hover:shadow-[#DB4437]"
              @click.prevent="login(Providers.GOOGLE)"
            >
              <Icon class="text-white" name="bxl:google" size="48" />
            </button>
            <button
              class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#6441a5] text-white hover:shadow-md hover:shadow-[#6441a5]"
              @click.prevent="login(Providers.TWITCH)"
            >
              <Icon class="text-white" name="mdi:twitch" size="48" />
            </button>
            <button
              class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#5865F2] text-white hover:shadow-md hover:shadow-[#5865F2]"
              @click.prevent="login(Providers.DISCORD)"
            >
              <Icon class="text-white" name="mdi:discord" size="48" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.social-login {
  @apply cursor-pointer border border-dark rounded-md p-2 flex items-center justify-center transform duration-500 hover:(bg-gray-200 dark:bg-dark-700);
}

.target {
  @apply flex items-center justify-center rounded-full;
}
</style>
