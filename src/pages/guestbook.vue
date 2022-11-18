<script setup lang="ts">
import {
  computed,
  ref,
  useGuestbook,
  useHead,
  useSupabase,
} from '#imports'
import { formatGuestBookDate } from '~/logic/dates'

useHead({
  title: 'My Guestbook - Arthur Danjou',
})

const { user, isAdmin, isLoggedIn } = useSupabase()

const { useGithubLogin, useDiscordLogin, useTwitchLogin, useGoogleLogin, useTwitterLogin, logout } = useSupabase()
const { getAllMessages, deleteMessage, signMessage, getOwnMessage } = await useGuestbook()

const messages = await getAllMessages()
const own = await getOwnMessage()
const hasAlreadySigned = computed(() => own !== null)

const content = ref<string | undefined>('')
const formState = ref({
  error: false,
  sent: false,
})
const signNewMessage = async () => {
  if (content.value!.length <= 5) {
    formState.value.error = true
    setTimeout(() => {
      formState.value.error = false
    }, 5000)
    return
  }
  await signMessage(content.value!)
  formState.value.sent = true
  setTimeout(() => formState.value.sent = false, 5000)
}

const handleDelete = async () => {
  content.value = ''
  await deleteMessage()
}
</script>

<template>
  <main>
    <PageTitle title="My Book" />
    <section class="md:w-1/2 mx-auto">
      <div v-if="isLoggedIn" class="my-12 flex flex-col bg-stone-200 dark:bg-neutral-800 p-4 rounded-lg border border-dark">
        <div>
          <h1 v-if="hasAlreadySigned" class="text-3xl font-bold">
            Sign the guestbook, again
          </h1>
          <h1 v-else class="text-3xl font-bold">
            Sign the guestbook
          </h1>
          <h3 v-if="hasAlreadySigned" class="text-lg text-gray-600 dark:text-gray-400">
            You have already shared a message. You can edit it below.
          </h3>
          <h3 v-else class="text-lg text-gray-600 dark:text-gray-400">
            Share a message with the future visitors of my website
          </h3>
          <form v-if="!formState.sent" class="w-full relative mt-4">
            <input
              v-model="content"
              type="text"
              placeholder="Your message"
              required
              class="w-full p-2 bg-stone-300 rounded-md dark:bg-neutral-700 outline-none duration-300 pr-22"
            >
            <button v-if="hasAlreadySigned" class="absolute right-1 top-1 px-4 p-1 rounded-md duration-300 bg-stone-400 hover:bg-stone-500 dark:(bg-neutral-600 hover:bg-neutral-500)" @click.prevent="signNewMessage">
              Resign
            </button>
            <button v-else class="absolute right-1 top-1 px-4 p-1 rounded-md duration-300 bg-stone-400 hover:bg-stone-500 dark:(bg-neutral-600 hover:bg-neutral-500)" @click.prevent="signNewMessage">
              Sign
            </button>
          </form>
          <p v-else class="mt-4 text-lime-500 dark:text-lime-700">
            Your have successfully signed the guestbook !
          </p>
          <p :class="formState.error ? 'opacity-100' : 'opacity-0'" class="mt-1 text-sm italic text-red-500 duration-300">
            You need to write a message longer than 5 characters to sign the guestbook
          </p>
          <div class="flex justify-between items-center text-sm italic text-gray-600 dark:text-gray-400">
            <p>
              Your informations are only used to display your name and reply by email.
            </p>
            <div class="cursor-pointer border hover:shadow-dark duration-300 border-dark rounded-md p-1 flex items-center justify-center space-x-2" @click="logout">
              Logout <Icon name="material-symbols:logout-rounded" size="20px" class="ml-2" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="my-12 flex flex-col bg-white dark:bg-dark-900 p-4 rounded-lg border border-dark">
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
          Your informations are only used to display your name and reply by email.
        </p>
      </div>
      <div class="space-y-8">
        <div v-for="message in messages" :key="message" class="flex flex-col space-y-2">
          <p class="text-lg font-bold">
            {{ message.content }}
          </p>
          <div class="flex items-center space-x-8 text-sm">
            <div class="flex items-center space-x-4 text-sm">
              <p class="text-gray-600 dark:text-gray-400">
                {{ message.username }}
              </p>
              <span class="text-gray-300 dark:text-gray-600">/</span>
              <p class="text-gray-600 dark:text-gray-400">
                {{ formatGuestBookDate(message.createdAt) }}
              </p>
            </div>
            <div
              v-if="user && user.email && message.email === user.email || isAdmin"
              class="text-red-500 text-xxs px-1 py-.5 border rounded-md border-red-500 cursor-pointer hover:(bg-red-500 bg-opacity-25) duration-300"
              @click.prevent="handleDelete"
            >
              Delete message
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.social-login {
  @apply cursor-pointer border border-dark rounded-md p-1 flex items-center justify-center transform duration-300 hover:scale-105;
}
</style>
