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

const { user, isBlocked, isAdmin, isLoggedIn, login, logout, Providers } = useSupabase()
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

const updateValue = (content: any) => {
  content.value = content
}
</script>

<template>
  <section>
    <PageTitle title="My Book" />
    <div class="md:w-1/2 mx-auto">
      <div v-if="isBlocked" class="my-12 flex flex-col bg-stone-100 dark:bg-dark-900  p-4 rounded-lg border border-dark">
        <div>
          <h1 class="text-3xl font-bold">
            You cannot sign my guestbook
          </h1>
          <h3 v-if="hasSignedGuestbook" class="text-md text-gray-600 dark:text-gray-400">
            You are blocked due to your behavior.
          </h3>
        </div>
      </div>
      <div v-else-if="isLoggedIn && !isBlocked" class="my-12 flex flex-col bg-stone-10_00 dark:bg-dark-900 p-4 rounded-lg border border-dark">
        <div>
          <h1 class="text-3xl font-bold">
            {{ hasSignedGuestbook ? 'Sign the guestbook, again' : 'Sign the guestbook' }}
          </h1>
          <h3 class="text-md text-gray-600 dark:text-gray-400">
            {{ hasSignedGuestbook ? 'You have already shared a message. You can edit it below.' : 'Share a message with the future visitors of my website' }}
          </h3>
          <form v-if="!formState.sent" class="w-full relative mt-4">
            <Input
              :content="content"
              label="Your message"
              icon="ph:pencil"
              :message="formState.error ? 'You need to write a message longer than 5 characters to sign the guestbook' : ''"
              @update="updateValue"
            />
          </form>
          <p v-else class="my-4 text-lime-500 dark:text-lime-700">
            Your have successfully signed the guestbook !
          </p>
          <p class="italic text-xs text-gray-600 dark:text-gray-400">
            Your informations are only used to display your name and reply by email.
          </p>
          <div class="mt-2 flex justify-between">
            <Button
              :content="hasSignedGuestbook ? 'Resign' : 'Sign'"
              :sendable="content.length > 5"
              icon="fa-regular:save"
              @click.prevent="signNewMessage"
            />
            <Button content="Logout" icon="material-symbols:logout-rounded" @click.prevent="logout" />
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
          <button
            class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#333] text-white hover:shadow-md hover:shadow-[#333]"
            @click.prevent="login(Providers.GITHUB)"
          >
            <Icon class="text-white" name="mdi:github" size="32" />
          </button>
          <button
            class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#1DA1F2] text-white hover:shadow-md hover:shadow-[#1DA1F2]"
            @click.prevent="login(Providers.TWITTER)"
          >
            <Icon class="text-white" name="mdi:twitter" size="32" />
          </button>
          <button
            class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#DB4437] text-white hover:shadow-md hover:shadow-[#DB4437]"
            @click.prevent="login(Providers.GOOGLE)"
          >
            <Icon class="text-white" name="bxl:google" size="32" />
          </button>
          <button
            class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#6441a5] text-white hover:shadow-md hover:shadow-[#6441a5]"
            @click.prevent="login(Providers.TWITCH)"
          >
            <Icon class="text-white" name="mdi:twitch" size="32" />
          </button>
          <button
            class="rounded-xl duration-300 p-2 hover:-translate-y-1 transform bg-[#5865F2] text-white hover:shadow-md hover:shadow-[#5865F2]"
            @click.prevent="login(Providers.DISCORD)"
          >
            <Icon class="text-white" name="mdi:discord" size="32" />
          </button>
        </div>
        <p class="text-sm italic">
          Your informations are only used to display your name and reply by email.
        </p>
      </div>
      <div class="space-y-8">
        <div v-for="message in getAllMessages" :id="message.id" :key="message.id" class="cursor-default flex flex-col space-y-2">
          <div class="flex items-center space-x-4">
            <UserLine :link="true" :author="message.author" :date="message.createdAt.toString()" />
            <DeleteButton
              v-if="(user && message.author.email === user.email) || isAdmin"
              :thin="true"
              @click.prevent="handleDelete(message.author.email)"
            />
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
