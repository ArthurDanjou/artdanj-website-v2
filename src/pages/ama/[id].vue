<script setup lang="ts">
import { computed, ref, useComment, useHead, useQuestion, useRoute } from '#imports'
import { convertStringToLink } from '~/logic/stringToLink'

const { isLoggedIn, isAdmin, user, isBlocked } = useSupabase()
const route = useRoute()
const { getQuestion } = await useQuestion()
const { replyToQuestion, deleteComment } = await useComment()

const { data: question, refresh: refreshQuestion } = await getQuestion(route.params.id)

useHead({
  title: `${question.value?.title} - Ask me anything`,
})

const answer = ref('')
const isSendable = computed(() => answer.value.length >= 5)
const sendAnswer = async () => {
  if (!isSendable.value)
    return

  await replyToQuestion(question.value!.id, answer.value)
  await refreshQuestion()
  answer.value = ''
}

const handleDelete = async (id: number) => {
  await deleteComment(id)
  await refreshQuestion()
}
</script>

<template>
  <section class="mt-16 md:mt-32 md:w-2/3 mx-auto sm:rounded">
    <main class="max-w-2xl px-4 mx-auto sm:px-8">
      <ALink class="mb-4" link="/ama">
        Go back to the AMA
      </ALink>
      <UserLine :link="true" :author="question.author" :date="question.createdAt" />
      <div v-if="question" class="my-4">
        <h1 class="text-2xl font-bold mb-2">
          {{ question.title }}
        </h1>
        <h3 class="text-md text-gray-600 dark:text-gray-400">
          {{ question.description }}
        </h3>
      </div>
      <Separator>
        <template #icon>
          <Icon name="ph:chat-circle-bold" size="24" />
        </template>
        <div v-if="question && question.comments.length > 0" class="space-y-6 my-4">
          <div v-for="comment in question.comments" :id="`#comment-${comment.id}`" :key="comment.id">
            <div class="flex items-center space-x-4 flex-wrap">
              <UserLine :link="true" :author="comment.author" :date="comment.createdAt" />
              <div>
                <DeleteButton
                  v-if="isAdmin || (user && user.username && comment.author.username === user.username)"
                  :thin="true"
                  @click.prevent="handleDelete(comment.id)"
                />
              </div>
            </div>
            <p class="mt-1 pl-11 text-gray-600 dark:text-gray-400" v-html="convertStringToLink(comment.content)" />
          </div>
        </div>
        <div v-else class="text-gray-600 dark:text-gray-400 flex items-center space-x-2">
          <p>Be the first to answer this question by filling the form below</p>
          <Icon name="ph:arrow-down-bold" size="20" />
        </div>
      </Separator>
      <div v-if="isBlocked" class="italic text-xs flex justify-center items-center space-x-1 mt-2 text-red-400">
        <Icon name="octicon:blocked-16" size="16" />
        <h5>
          You are blocked due to your behavior. You can't comment anymore.
        </h5>
      </div>
      <form v-else-if="isLoggedIn && !isBlocked" class="flex w-full space-x-2">
        <div class="relative w-full">
          <div class="w-full flex items-center group">
            <div class="group-focus-within:(-translate-x-1 -translate-y-1 transform bg-stone-200 shadow-lg) dark:group-focus-within:(bg-dark-400 shadow-lg) duration-300 flex items-center justify-center p-2 absolute rounded-xl">
              <Icon name="ph:chat-circle-bold" size="20" />
            </div>
            <input
              id="input"
              v-model="answer"
              class="w-full pl-10 rounded-lg px-4 py-2 focus:outline-0 bg-white dark:bg-dark-800"
            >
            <label
              for="input"
              class="absolute left-10 group-focus-within:(opacity-0 transform translate-x-2) duration-300 text-gray-600 dark:text-gray-200 text-opacity-60"
              :class="answer.length === 0 ? '' : 'opacity-0 transform translate-x-2'"
            >
              Write a comment...
            </label>
          </div>
        </div>
        <Button
          icon="mingcute:send-plane-line"
          content="Send"
          :sendable="isSendable"
          @click.prevent="sendAnswer"
        />
      </form>
      <div v-else class="italic text-xs flex justify-center items-center space-x-1 mt-2">
        <Icon name="ri:question-line" size="16" />
        <h5>
          You need to be connected to answer this question
        </h5>
      </div>
    </main>
  </section>
</template>
