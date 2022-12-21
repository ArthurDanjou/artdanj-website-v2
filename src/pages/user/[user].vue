<script setup lang="ts">
import {
  computed,
  definePageMeta,
  ref,
  showError,
  useComment,
  useGuestbook,
  useHead,
  useQuestion,
  useRoute,
  useSupabase,
  useUser,
} from '#imports'
import {formatLongDate} from '~/logic/dates'

const route = useRoute()

definePageMeta({
  validate: async (route) => {
    return /^([A-Za-z0-9]+)$/.test(route.params.user as string)
  },
})

useHead({
  title: `${route.params.user}'s Profile - Arthur Danjou`,
})

const open = ref(false)
const openModal = () => {
  open.value = true
  document.body.classList.add('overflow-hidden')
}

const { getUserFromDB, refreshUser, unsavePost, deleteUser } = await useUser(route.params.user)
if (!getUserFromDB.value?.email) {
  showError({
    statusCode: 404,
    message: 'User not found',
  })
}

const { isAdmin, user, isLoggedIn, logout } = useSupabase()
const isUser = computed(() => isLoggedIn && getUserFromDB.value?.email === user.value?.email)

const { deleteMessage } = await useGuestbook()
const { deleteComment } = await useComment()
const { deleteQuestion } = await useQuestion()

const handleDelete = async (type: 'comment' | 'question' | 'saved', id: number | string) => {
  switch (type) {
    case 'comment':
      await deleteComment(Number(id))
      break
    case 'question':
      await deleteQuestion(Number(id))
      break
    case 'saved':
      await unsavePost(String(id))
      break
  }
  await refreshUser()
}

const deleteAccount = async () => {
  open.value = false
  await deleteUser()
  await useRouter().push('/')
  await logout()
}
</script>

<template>
  <section>
    <PageTitle v-if="isUser" title="Your Profile" />
    <PageTitle v-else title="User Profile" />
    <div v-if="getUserFromDB" class="md:w-1/2 mx-auto">
      <div class="py-16 border-b border-.5 border-gray-150 dark:border-zinc-800">
        <h1 class="font-bold text-4xl mb-2">
          Profile
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-16">
          Discover {{ getUserFromDB.username }}'s profile
        </p>
        <div>
          <div>
            <img :src="getUserFromDB.avatar" alt="User avatar" class="w-32 h-32 rounded-full">
            <div class="my-4">
              <h1 class="font-bold text-3xl">
                {{ getUserFromDB.username }}
              </h1>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ getUserFromDB.description }}
              </p>
            </div>
            <div class="space-y-1">
              <div class="flex mb-2">
                <div
                    v-if="getUserFromDB.role === 'ADMIN'"
                    class="font-bold text-amber-500 text-sm bg-amber-200/70 px-2 py-.5 rounded-full dark:bg-amber-400/90 dark:text-white"
                >
                  ADMIN 👑
                </div>
                <div
                    v-if="getUserFromDB.role === 'BLOCKED'"
                    class="font-bold text-red-400 text-sm bg-red-200/60 px-2 py-.5 rounded-full dark:bg-red-600/70 dark:text-white"
                >
                  BLOCKED 🚫
                </div>
              </div>
              <div class="flex space-x-2 items-center">
                <Icon name="ph:hourglass-low-bold" size="20" />
                <h3>
                  {{ formatLongDate(getUserFromDB.lastSeen.toString()) }} <span class="text-gray-600 dark:text-gray-400 text-xxs">(last activity)</span>
                </h3>
              </div>
              <div v-if="getUserFromDB.location" class="flex space-x-2 items-center">
                <Icon name="ph:map-pin-bold" size="20" />
                <h3>
                  {{ getUserFromDB.location }}
                </h3>
              </div>
              <ALink v-if="getUserFromDB.website" target="_blank" :link="getUserFromDB.website.includes('https://') ? getUserFromDB.website : `https://${getUserFromDB.website}`" class="flex space-x-2 items-center">
                <Icon name="ph:globe-bold" size="20" />
                <h3>
                  {{ getUserFromDB.website }}
                </h3>
              </ALink>
              <ALink v-if="getUserFromDB.twitterId" target="_blank" :link="`https://twitter.com/${getUserFromDB.twitterId}`" class="flex space-x-2 items-center">
                <Icon name="ph:twitter-logo-bold" size="20" />
                <h3>
                  <span class="text-gray-400 dark:text-gray-600">@</span>{{ getUserFromDB.twitterId }}
                </h3>
              </ALink>
              <ALink v-if="getUserFromDB.githubId" target="_blank" :link="`https://github.com/${getUserFromDB.githubId}`" class="flex space-x-2 items-center">
                <Icon name="ph:github-logo-bold" size="20" />
                <h3>
                  {{ getUserFromDB.githubId }}
                </h3>
              </ALink>
              <ALink v-if="getUserFromDB.twitchId" target="_blank" :link="`https://twitch.tv/${getUserFromDB.twitchId}`" class="flex space-x-2 items-center">
                <Icon name="ph:twitch-logo-bold" size="20" />
                <h3>
                  {{ getUserFromDB.twitchId }}
                </h3>
              </ALink>
              <div v-if="getUserFromDB.googleId" class="flex space-x-2 items-center">
                <Icon name="mdi:google" size="20" />
                <h3>
                  {{ getUserFromDB.googleId }}
                </h3>
              </div>
              <div v-if="getUserFromDB.discordId" class="flex space-x-2 items-center">
                <Icon name="ph:discord-logo-bold" size="20" />
                <h3>
                  {{ getUserFromDB.discordId }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isUser" class="py-16 border-b border-.5 border-gray-150 dark:border-zinc-800">
        <h1 class="font-bold text-4xl mb-2">
          Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-16">
          Edit below your settings
        </p>
        <client-only>
          <div class="space-y-8">
            <UserFormUsername />
            <UserFormEmail />
            <UserFormLocation />
            <UserFormDescription />
            <UserFormWebsite />
          </div>
        </client-only>
        <div class="flex justify-between mt-8">
          <Button content="Logout" icon="material-symbols:logout-rounded" @click.prevent="logout()" />
          <DeleteButton :thin="true" content="Delete your account" @click.prevent="openModal()"/>
        </div>
      </div>
      <div class="py-16">
        <h1 class="font-bold text-4xl mb-2">
          Activity
        </h1>
        <div class="text-gray-600 dark:text-gray-400 mb-16 text-justify">
          {{ isUser ? 'Find below all your activity on the site including your questions, your comments and your message in the guestbook.' : 'Find below all the activity of the user on the site including their questions, their comments and their message in the guestbook.' }}
          <span class="italic text-xxs">(Click on the line to go to the page)</span>
          <div v-if="getUserFromDB.role === 'BLOCKED'" class="italic text-xs flex items-center space-x-1 mt-2 text-red-400">
            <Icon name="octicon:blocked-16" size="16" />
            <h5>
              {{ isUser ? 'You are blocked due to your behaviour' : 'This user is blocked due to is behaviour' }}
            </h5>
          </div>
        </div>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-4">
            {{ isUser ? 'Your' : 'User\'s' }} questions
          </h3>
          <div v-if="getUserFromDB.questions.length > 0" class="space-y-2">
            <ul v-for="question in getUserFromDB.questions" :key="question.id">
              <li class="list-disc ml-4 duration-300 p-1 rounded-xl hover:bg-white hover:dark:bg-dark-800 hover:transform hover:-translate-y-0.5">
                <NuxtLink
                    :href="`/ama/${question.id}`"
                    class="flex flex-wrap space-x-2 text-gray-600 dark:text-gray-400"
                >
                  <p class="font-bold text-black dark:text-white">
                    {{ question.title }}
                  </p>
                  <span>·</span>
                  <div>{{ formatLongDate(question.createdAt.toString()) }}</div>
                  <span>·</span>
                  <div v-if="question.comments.length <= 1">
                    {{ question.comments.length }} answer
                  </div>
                  <div v-else>
                    {{ question.comments.length }} answers
                  </div>
                  <DeleteButton
                    v-if="isUser || isAdmin"
                    :thin="true"
                    @click.prevent="handleDelete('question', question.id)"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <p v-else class="text-gray-600 dark:text-gray-400">
            {{ isUser ? 'You haven\'t' : 'The user hasn\'t' }} asked any questions yet.
          </p>
        </div>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-4">
            {{ isUser ? 'Your' : 'User\'s' }} guestbook message
          </h3>
          <NuxtLink
              v-if="getUserFromDB.guestbook"
              :href="`/guestbook#${getUserFromDB.guestbook.id}`"
              class="flex flex-col space-y-2 duration-300 p-1 rounded-xl hover:bg-white hover:dark:bg-dark-800 hover:transform hover:-translate-y-0.5"
          >
            <div class="flex items-center space-x-4">
              <UserLine :author="getUserFromDB.guestbook.author" :date="getUserFromDB.guestbook.createdAt.toString()"/>
              <DeleteButton
                  v-if="isUser || isAdmin" :thin="true"
                  @click.prevent="deleteMessage(getUserFromDB.guestbook.author.email)"
              />
            </div>
            <p class="pl-11 text-gray-600 dark:text-gray-400">
              {{ getUserFromDB.guestbook.content }}
            </p>
          </NuxtLink>
          <p v-else class="text-gray-600 dark:text-gray-400">
            {{ isUser ? 'You haven\'t' : 'The user hasn\'t' }} signed the guestbook yet.
          </p>
        </div>
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-4">
            {{ isUser ? 'Your' : 'User\'s' }} saved Posts
          </h3>
          <div v-if="getUserFromDB.savedPosts.length > 0" class="space-y-2">
            <ul v-for="savedPost in getUserFromDB.savedPosts" :key="savedPost.id">
              <li class="list-disc ml-4 duration-300 p-1 rounded-xl hover:bg-white hover:dark:bg-dark-800 hover:transform hover:-translate-y-0.5">
                <NuxtLink
                    :href="`/blog/${savedPost.post.slug}`"
                    class="flex flex-wrap space-x-2 text-gray-600 dark:text-gray-400"
                >
                  <p class="font-bold text-black dark:text-white">
                    {{ savedPost.post.title }}
                  </p>
                  <span>·</span>
                  <div>{{ formatLongDate(savedPost.createdAt.toString()) }}</div>
                  <DeleteButton
                      v-if="isUser || isAdmin"
                      :thin="true"
                      @click.prevent="handleDelete('saved', savedPost.post.slug)"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <p v-else class="text-gray-600 dark:text-gray-400">
            {{ isUser ? 'You haven\'t' : 'The user hasn\'t' }} saved any posts yet.
          </p>
        </div>
        <div class="mb-!">
          <h3 class="font-bold text-xl mb-4">
            {{ isUser ? 'Your' : 'User\'s' }} comments
          </h3>
          <div v-if="getUserFromDB.comments.length > 0" class="space-y-2">
            <ul v-for="comment in getUserFromDB.comments" :key="comment.id">
              <li class="list-disc ml-4 duration-300 p-1 rounded-xl hover:bg-white hover:dark:bg-dark-800 hover:transform hover:-translate-y-0.5">
                <NuxtLink
                    :href="comment.question ? `/ama/${comment.question.id}#comment-${comment.id}` : `/blog/${comment.post.slug}#comment-${comment.id}`"
                    class="flex flex-wrap space-x-2 text-gray-600 dark:text-gray-400"
                >
                  <p class="font-bold text-black dark:text-white truncate">
                    {{ comment.content }}
                  </p>
                  <span>·</span>
                  <div>{{ formatLongDate(comment.createdAt.toString()) }}</div>
                  <DeleteButton
                      v-if="isUser || isAdmin"
                      :thin="true"
                      @click.prevent="handleDelete('comment', comment.id)"
                  />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <p v-else class="text-gray-600 dark:text-gray-400">
            {{ isUser ? 'You haven\'t' : 'The user hasn\'t' }} posted any comments yet.
          </p>
        </div>
      </div>
      <client-only>
        <Modal v-if="open" @close="open = false">
          <div class="flex flex-col">
            <ModalTitle title="Delete account" />
            <p class="text-md text-gray-600 dark:text-gray-400 text-justify mb-4">
              Are you sure you want to delete your account? All of your data will be
              <strong><u>permanently</u></strong> removed. This action cannot be undone.
            </p>
            <div class="flex justify-center">
              <DeleteButton content="Delete my account" @click.prevent="deleteAccount()" />
            </div>
          </div>
        </Modal>
      </client-only>
    </div>
  </section>
</template>
