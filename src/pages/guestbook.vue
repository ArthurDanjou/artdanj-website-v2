<script setup lang="ts">
import { ref, useAsyncData, useHead, useSupabaseClient, useSupabaseUser } from '#imports'
import { useSupabase } from '~/composables/useSupabase'
import type { GuestBookMessage } from '~/types/types'

useHead({
  title: 'My Guestbook - Arthur Danjou',
})

const user = useSupabaseUser()
const client = useSupabaseClient()
const { useGithubLogin, useDiscordLogin, useTwitchLogin, useGoogleLogin, useTwitterLogin } = useSupabase()

const content = ref('')
const formState = ref({
  error: false,
  sent: false,
})
const handleForm = async () => {
  if (content.value.length <= 10) {
    formState.value.error = true
    setTimeout(() => {
      formState.value.error = false
    }, 5000)
    return
  }
  await $fetch('/api/guestbook', {
    method: 'POST',
    body: {
      content: content.value,
      email: user.value.email,
      username: user.value.user_metadata.full_name,
    },
  })
}

const { data: messages } = await useAsyncData('messages', async () => {
  return $fetch<GuestBookMessage>('/api/guestbook')
})
</script>

<template>
  <main>
    <PageTitle title="My Book" />
    <div>
      <div @click="client.auth.signOut()">
        Logout
      </div>
    </div>
    <section class="md:w-1/2 mx-auto">
      <div v-if="user" class="my-12 flex flex-col bg-stone-200 dark:bg-neutral-800 p-4 rounded-lg border border-dark">
        <div>
          <h1 class="text-3xl font-bold">
            Sign the guestbook
          </h1>
          <h3 class="text-lg text-gray-600 dark:text-gray-400">
            Share a message with the future visitors of my website
          </h3>
          <form v-if="!formState.sent" class="w-full relative mt-4">
            <input
              v-model="content"
              type="text"
              placeholder="Your message"
              required
              class="w-full p-2 bg-stone-300 rounded-md dark:bg-neutral-700 outline-none duration-300 pr-18"
            >
            <button class="absolute right-1 top-1 px-4 p-1 rounded-md duration-300 bg-stone-400 hover:bg-stone-500 dark:(bg-neutral-600 hover:bg-neutral-500)" @click.prevent="handleForm">
              Sign
            </button>
          </form>
          <div v-else class="my-4">
            Hey
          </div>
          <p :class="formState.error ? 'opacity-100' : 'opacity-0'" class="mt-1 text-sm italic text-red-500 duration-300">
            You need to write a message longer than 10 characters to sign the guestbook
          </p>
        </div>
      </div>
      <div v-else class="my-12 flex flex-col bg-stone-200 dark:bg-neutral-800 p-4 rounded-lg border border-dark">
        <div>
          <h1 class="text-3xl font-bold">
            Sign the guestbook
          </h1>
          <h3 class="text-lg text-gray-600 dark:text-gray-400">
            Share a message with the future visitors of my website
          </h3>
        </div>
        <div class="flex space-x-4 my-4">
          <Icon class="social-login" name="mdi:github" size="32px" @click.prevent="useGithubLogin()" />
          <Icon class="social-login text-[#1DA1F2]" name="mdi:twitter" size="32px" @click.prevent="useTwitterLogin()" />
          <Icon class="social-login text-[#DB4437]" name="bxl:google" size="32px" @click.prevent="useGoogleLogin()" />
          <Icon class="social-login text-[#6441a5]" name="mdi:twitch" size="32px" @click.prevent="useTwitchLogin()" />
          <Icon class="social-login text-[#5865F2]" name="mdi:discord" size="32px" @click.prevent="useDiscordLogin()" />
        </div>
        <p class="text-sm italic">
          Your information is only used to display your name and reply by email.
        </p>
      </div>
      <div>
        {{ messages }}
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.social-login {
  @apply cursor-pointer border border-dark rounded-md p-1 flex items-center justify-center transform duration-300 hover:scale-105;
}
</style>
