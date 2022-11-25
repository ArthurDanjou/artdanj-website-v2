<script setup lang="ts">
import {
  computed,
  onClickOutside,
  ref, showError, useComment, useGuestbook,
  useHead, useQuestion,
  useRoute, useSupabase,
  useSupabaseUser, useUser,
} from '#imports'
import { formatGuestBookDate } from '~/logic/dates'

const route = useRoute()

useHead({
  title: `${route.params.user}'s Profile - Arthur Danjou`,
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

const { getUserFromDB, refreshUser } = await useUser(route.params.user)
if (!getUserFromDB.value?.email) {
  showError({
    statusCode: 404,
    message: 'User not found',
  })
}

// todo test with store user
const user = useSupabaseUser()
const { isAdmin, isLoggedIn } = useSupabase()
const isUser = computed(() => true) // todo: route.params.user === user.value?.user_metadata.nickname && isLoggedIn)

const { deleteMessage } = await useGuestbook()
const { deleteComment } = await useComment()
const { deleteQuestion } = await useQuestion()

const handleDelete = async (type: 'comment' | 'question', id: number) => {
  switch (type) {
    case 'comment':
      await deleteComment(id)
      break
    case 'question':
      await deleteQuestion(id)
      break
  }
  await refreshUser()
}
</script>

<template>
  <section>
    <PageTitle v-if="isUser" title="Your Profile" />
    <PageTitle v-else title="User Profile" />
    <div v-if="getUserFromDB" class="md:w-1/2 mx-auto">
      <div v-if="isUser" class="py-16 border-b border-.5 border-gray-150 dark:border-zinc-800">
        <h1 class="font-bold text-4xl mb-2">
          Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-16">
          Edit below your settings
        </p>
        <div class="space-y-8">
          <UserFormUsername />
          <UserFormEmail />
          <UserFormLocation />
          <UserFormDescription />
        </div>
        <div class="flex justify-between mt-8">
          <div class="text-sm border border-.5 border-dark py-1 px-2 rounded-md bg-gray-300/60 dark:(bg-dark-400/60 text-white) text-black cursor-pointer duration-300 font-bold hover:(bg-gray-200/40 dark:bg-dark-400)">
            Logout
          </div>
          <div>
            <DeleteButton :big="true" content="Delete your account" @click.prevent="setOpened(true)" />
          </div>
        </div>
      </div>
      <div class="py-16">
        <h1 class="font-bold text-4xl mb-2">
          Activity
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-16 text-justify">
          Find below all your activity on the site including your questions, your comments and your message in the guestbook.
          <span class="italic text-xxs">(Click on the line to go to the page)</span>
        </p>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-4">
            Your questions
          </h3>
          {{ deleting }}
          <div v-if="getUserFromDB.questions && getUserFromDB.questions.length > 0" class="space-y-4">
            <ul v-for="question in getUserFromDB.questions" :key="question.id">
              <li class="list-disc ml-4">
                <NuxtLink class="flex flex-wrap space-x-2 text-gray-600 dark:text-gray-400" :href="`/ama/${question.id}`">
                  <p class="font-bold text-black dark:text-white">
                    {{ question.title }}
                  </p>
                  <span>·</span>
                  <div>{{ formatGuestBookDate(question.createdAt.toString()) }}</div>
                  <span>·</span>
                  <div v-if="question.comments.length <= 1">
                    {{ question.comments.length }} answer
                  </div>
                  <div v-else>
                    {{ question.comments.length }} answers
                  </div>
                  <DeleteButton
                    v-if="isUser || isAdmin"
                    @click.prevent="handleDelete('question', question.id)"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <p v-else class="text-gray-600 dark:text-gray-400">
            You haven't asked any questions yet.
          </p>
        </div>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-4">
            Your guestbook message
          </h3>
          <div v-if="getUserFromDB.guestbook">
            <NuxtLink class="flex flex-col space-y-2" :href="`/guestbook#${getUserFromDB.guestbook.id}`">
              <div class="flex items-center space-x-4">
                <UserLine :author="getUserFromDB.guestbook.author" :date="getUserFromDB.guestbook.createdAt.toString()" />
                <DeleteButton v-if="isUser || isAdmin" @click.prevent="deleteMessage(getUserFromDB.guestbook.author.email)" />
              </div>
              <p class="pl-11 text-gray-600 dark:text-gray-400">
                {{ getUserFromDB.guestbook.content }}
              </p>
            </NuxtLink>
          </div>
          <p v-else class="text-gray-600 dark:text-gray-400">
            You haven't signed the guestbook yet.
          </p>
        </div>
        <div class="mb-!">
          <h3 class="font-bold text-xl mb-4">
            Your comments
          </h3>
          <div v-if="getUserFromDB.comments && getUserFromDB.comments.length > 0" class="space-y-4">
            <ul v-for="comment in getUserFromDB.comments" :key="comment.id">
              <li class="list-disc ml-4">
                <NuxtLink class="flex flex-wrap space-x-2 text-gray-600 dark:text-gray-400" :href="comment.question ? `/ama/${comment.question.id}#comment-${comment.id}` : `/blog/${comment.post.slug}#comment-${comment.id}`">
                  <p class="font-bold text-black dark:text-white truncate">
                    {{ comment.content }}
                  </p>
                  <span>·</span>
                  <div>{{ formatGuestBookDate(comment.createdAt.toString()) }}</div>
                  <DeleteButton
                    v-if="isUser || isAdmin"
                    @click.prevent="handleDelete('comment', comment.id)"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <p v-else class="text-gray-600 dark:text-gray-400">
            You haven't posted any comments yet.
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
    </div>
  </section>
</template>
