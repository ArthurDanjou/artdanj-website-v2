<script setup lang="ts">
import { definePageMeta, onClickOutside, ref, useComment, useGuestbook, useQuestion } from '#imports'

definePageMeta({
  middleware: 'navigation',
})

const open = ref(false)
const modal = ref(null)

const setOpened = (state: boolean) => {
  if (state)
    document.body.classList.add('overflow-hidden')
  else
    document.body.classList.remove('overflow-hidden')

  open.value = state
}

onClickOutside(modal, () => {
  setOpened(false)
})

const { own: getGuestbookMessage } = await useGuestbook()

const { getOwnComments } = await useComment()

const { getOwnQuestions } = await useQuestion()
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
            {{ getOwnQuestions }}
          </p>
        </div>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-2">
            Your guestbook message
          </h3>
          <p>
            {{ getGuestbookMessage }}
          </p>
        </div>
        <div class="mb-!">
          <h3 class="font-bold text-xl mb-2">
            Your comments
          </h3>
          <p>
            {{ getOwnComments }}
          </p>
        </div>
      </div>
      <client-only>
        <transition v-show="open" name="modal">
          <div>
            <ModalBackground />
            <ModalContainer ref="modal">
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
            </ModalContainer>
          </div>
        </transition>
      </client-only>
    </main>
  </section>
</template>
