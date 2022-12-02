<script setup lang="ts">
import {
  ref,
  useGuestbook,
  useHead,
  useSupabase, useUser,
} from '#imports'
import { convertStringToLink } from '~/logic/stringToLink'

useHead({
  title: 'My Guestbook - Arthur Danjou',
})

const { user, isBlocked, isAdmin, isLoggedIn, useGithubLogin, useDiscordLogin, useTwitchLogin, useGoogleLogin, useTwitterLogin, logout } = useSupabase()
const { getAllMessages, deleteMessage, signMessage } = await useGuestbook()
const { hasSignedGuestbook, refreshUser, getGuestBookMessage } = await useUser(user.value ? user.value.username : null)

const content = ref<string | undefined>(getGuestBookMessage?.value?.content)
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
  await refreshUser()
  formState.value.sent = true
  setTimeout(() => formState.value.sent = false, 5000)
}

const handleDelete = async (email: string) => {
  content.value = ''
  await deleteMessage(email)
}
</script>

<template>
  <section>
    <PageTitle title="My Book" />
    <div class="md:w-1/2 mx-auto">
      <div v-if="isBlocked" class="my-12 flex flex-col bg-white dark:bg-dark-900  p-4 rounded-lg border border-dark">
        <div>
          <h1 class="text-3xl font-bold">
            You cannot sign my guestbook
          </h1>
          <h3 v-if="hasSignedGuestbook" class="text-md text-gray-600 dark:text-gray-400">
            You are blocked due to your behavior.
          </h3>
        </div>
      </div>
      <div v-else-if="isLoggedIn && !isBlocked" class="my-12 flex flex-col bg-white dark:bg-dark-900  p-4 rounded-lg border border-dark">
        <div>
          <h1 v-if="hasSignedGuestbook" class="text-3xl font-bold">
            Sign the guestbook, again
          </h1>
          <h1 v-else class="text-3xl font-bold">
            Sign the guestbook
          </h1>
          <h3 v-if="hasSignedGuestbook" class="text-md text-gray-600 dark:text-gray-400">
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
              class="w-full p-2 bg-stone-200 rounded-md dark:bg-neutral-800 outline-none duration-300 pr-22"
            >
            <button v-if="hasSignedGuestbook" class="absolute right-1 top-1 px-4 p-1 rounded-md duration-300 bg-stone-300 hover:bg-stone-400 dark:(bg-neutral-700 hover:bg-neutral-600)" @click.prevent="signNewMessage">
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
            <div class="button-sendable text-sm border border-.5 border-dark py-1 px-2 rounded-md font-bold duration-300 flex items-center justify-center space-x-2" @click="logout">
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
          <Icon class="social-login" name="mdi:github" size="48" @click.prevent="useGithubLogin()" />
          <Icon class="social-login text-[#1DA1F2]" name="mdi:twitter" size="48" @click.prevent="useTwitterLogin()" />
          <Icon class="social-login text-[#DB4437]" name="bxl:google" size="48" @click.prevent="useGoogleLogin()" />
          <Icon class="social-login text-[#6441a5]" name="mdi:twitch" size="48" @click.prevent="useTwitchLogin()" />
          <Icon class="social-login text-[#5865F2]" name="mdi:discord" size="48" @click.prevent="useDiscordLogin()" />
        </div>
        <p class="text-sm italic">
          Your informations are only used to display your name and reply by email.
        </p>
      </div>
      <div class="space-y-8">
        <div v-for="message in getAllMessages" :id="message.id" :key="message.id" class="cursor-default flex flex-col space-y-2">
          <div class="flex items-center space-x-4">
            <UserLine :link="true" :author="message.author" :date="message.createdAt.toString()" />
            <DeleteButton v-if="(user && message.author.email === user.email) || isAdmin" @click.prevent="handleDelete(message.author.email)" />
          </div>
          <p class="pl-11 text-gray-600 dark:text-gray-400" v-html="convertStringToLink(message.content)" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.social-login {
  @apply cursor-pointer border border-dark rounded-md p-2 flex items-center justify-center transform duration-500 hover:(bg-gray-200 dark:bg-dark-700);
}
</style>
