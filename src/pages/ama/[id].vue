<script setup lang="ts">
import { computed, ref, useComment, useQuestion, useRoute } from '#imports'
import { convertStringToLink } from '~/logic/stringToLink'
import { useHead } from '#head'

const isLoggedIn = true
const isAdmin = true
// const { isLoggedIn, IsAdmin } = useSupabase()
const route = useRoute()
const { getQuestion } = await useQuestion()
const { replyToQuestion, deleteComment } = await useComment()

const { data: question, refresh: refreshQuestion } = await getQuestion(route.params.id)

useHead({
  title: `${question.value?.title} - Ask me anything`,
})

const answer = ref('')
const isSendable = computed(() => answer.value.length > 0)

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
      <ALink class="mb-4" target="/ama">
        Go back to the AMA
      </ALink>
      <UserLine :author="question.author" :date="question.createdAt" />
      <div class="my-4">
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
        <div v-if="question.comments.length > 0" class="space-y-6 my-4">
          <div v-for="comment in question.comments" :key="comment.id">
            <div class="flex items-center space-x-4">
              <UserLine :author="comment.author" :date="comment.createdAt" />
              <div>
                <DeleteButton
                  v-if="isAdmin"
                  content="Delete comment"
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
      <form>
        <div class="relative">
          <textarea
            v-model="answer"
            placeholder="Write a comment..."
            style="padding-right: 64px; max-height: 192px; overflow: hidden; overflow-wrap: break-word; resize: none; height: 42px;"
            class="w-full rounded-md px-4 py-2 bg-gray-1000 dark:bg-white dark:bg-opacity-5 bg-opacity-5 border border-dark block"
          />
          <div class="absolute bottom-1 right-1.25">
            <div
              type="submit"
              :class="isSendable ? 'button-sendable' : 'button-not-sendable'"
              class="duration-300 flex items-center justify-center p-2 rounded-md shadow-xs hover:shadow-sm border border-dark"
              @click.prevent="sendAnswer()"
            >
              <Icon name="ph:arrow-up-bold" size="16" />
            </div>
          </div>
        </div>
      </form>
    </main>
  </section>
</template>

<style scoped lang="scss">
.button-sendable {
  @apply cursor-pointer text-black bg-gray-200 hover:bg-gray-300 dark:(text-white bg-dark-700 hover:bg-dark-300);
}

.button-not-sendable {
  @apply cursor-not-allowed text-gray-500 bg-gray-100 dark:bg-opacity-10;
}
</style>
