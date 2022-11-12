<script setup lang="ts">
import { definePageMeta, onClickOutside, ref, useComment, useGuestbook, useQuestion } from '#imports'

definePageMeta({
  middleware: 'navigation',
})

const open = ref(false)
const modal = ref(null)

const setOpened = (state: boolean) => {
  document.body.classList.add('overflow-hidden')
  open.value = state
}

onClickOutside(modal, () => {
  setOpened(false)
  document.body.classList.remove('overflow-hidden')
})

const { getOwnMessage } = await useGuestbook()
const guestbook = await getOwnMessage()

const { getOwnComments } = useComment()
const comments = await getOwnComments()

const { getOwnQuestions } = useQuestion()
const questions = await getOwnQuestions()
</script>

<template>
  <section>
    <PageTitle title="Your profile" />
    <main class="md:w-1/2 mx-auto">
      <div class="py-16 border-b border-.5 border-gray-150 dark:border-zinc-800">
        <h1 class="font-bold text-4xl mb-2">
          Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-16">
          Edit below your settings
        </p>
        <div>
          Edit profile
        </div>
        <div class="flex justify-between mt-4">
          <div class="text-sm border border-.5 border-dark py-1 px-2 rounded-md bg-gray-300/60 dark:(bg-dark-400/60 text-white) text-black cursor-pointer duration-300 font-bold hover:(bg-gray-200/40 dark:bg-dark-400)">
            Logout
          </div>
          <div class="text-sm border border-.5 border-red-500 py-1 px-2 rounded-md bg-red-400/20 text-red-500 cursor-pointer duration-300 font-bold hover:(bg-red-600 text-white)" @click.prevent="setOpened(true)">
            Delete your account
          </div>
        </div>
      </div>
      <div class="py-16">
        <h1 class="font-bold text-4xl mb-2">
          Activity
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-16 text-justify">
          Find below all your activity on the site including your questions, your comments and your message in the guestbook
        </p>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-2">
            Your questions
          </h3>
          <p>
            {{ questions }}
          </p>
        </div>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-2">
            Your guestbook message
          </h3>
          <p>
            {{ guestbook }}
          </p>
        </div>
        <div class="mb-!">
          <h3 class="font-bold text-xl mb-2">
            Your comments
          </h3>
          <p>
            {{ comments }}
          </p>
        </div>
      </div>
      <client-only>
        <transition v-show="open" name="modal">
          <div>
            <div class="z-101 h-300vh w-screen absolute inset-0 bg-black/40 overflow-y-auto" />
            <div ref="modal" class="border border-dark bg-stone-100 text-black dark:(bg-dark-800 text-white) rounded-xl lg:w-1/3 z-102 fixed top-50 left-[50%] -translate-x-[50%] transform ">
              <div class="flex flex-col">
                <div class="rounded-t-xl p-4 border-b border-dark rounded-t-lg flex justify-between items-center">
                  <h1 class="font-bold text-xl">
                    Delete account
                  </h1>
                  <Icon class="cursor-pointer duration-500 text-gray-400 dark:text-dark-100 hover:text-black dark:hover:text-white" name="maki:cross" size="20" @click="setOpened(false)" />
                </div>
                <div class="rounded-b-xl p-4">
                  <p class="text-md text-gray-600 dark:text-gray-400 text-justify mb-4">
                    Are you sure you want to delete your account? All of your data will be
                    <strong><u>permanently</u></strong> removed. This action cannot be undone.
                  </p>
                  <div class="text-center text-md border border-.5 border-red-500 py-1 px-2 rounded-md bg-red-400/20 text-red-500 cursor-pointer duration-300 font-bold hover:(bg-red-600 text-white)" @click.prevent="setOpened(false)">
                    Delete my account
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </client-only>
    </main>
  </section>
</template>

<style scoped lang="scss">
.modal-enter-active, .modal-leave-active {
  transition: opacity .3s;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
