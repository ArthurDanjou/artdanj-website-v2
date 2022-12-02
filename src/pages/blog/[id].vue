<script setup lang="ts">
import type { Post } from '~/types/content'
import {
  computed,
  onMounted,
  queryContent,
  ref,
  useAsyncData,
  useComment,
  useHead,
  useRoute, useSupabase,
  useUser,
} from '#imports'
import { usePost } from '~/composables/usePost'
import { convertStringToLink } from '~/logic/stringToLink'

const route = useRoute()
const { data: postContent } = await useAsyncData<Post>(`blog:post-content:${route.params.id}`, async () => await queryContent<Post>(`/posts/${route.params.id}`).findOne())
const { post, like, likes, view, views, refreshPost } = await usePost(route.params.id, postContent.value?.author, postContent.value?.title)

onMounted(() => {
  view()
})

useHead({
  title: `${postContent.value?.title} - Arthur Danjou's shelf`,
})

const top = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const { copy, copied } = useClipboard({
  source: `https://arthurdanjou.fr/blog/${route.params.id}`,
})

const { user, isAdmin, isLoggedIn, isBlocked } = useSupabase()

const answer = ref('')
const isSendable = computed(() => answer.value.length >= 5)

const { deleteComment, replyToPost } = await useComment()
const sendAnswer = async () => {
  if (!isSendable.value)
    return

  await replyToPost(post.value!.id, answer.value)
  await refreshPost()
  answer.value = ''
}
const handleDelete = async (id: number) => {
  await deleteComment(id)
  await refreshPost()
}

const { unsavePost, savePost, isSavedPost } = await useUser(user.value ? user.value.username : null)
const handleSave = async () => {
  if (isSavedPost(post.value!.slug))
    await unsavePost(post.value!.slug)
  else
    await savePost(post.value!.slug)
}
</script>

<template>
  <section class="mt-16 md:mt-32 md:w-2/3 mx-auto sm:rounded">
    <main v-if="postContent" class="max-w-2xl px-4 mx-auto sm:px-8">
      <ALink class="mb-4" link="/blog">
        Back to the shelf
      </ALink>
      <h1 class="text-4xl font-bold">
        {{ postContent.title }}
      </h1>
      <h3 class="text-xl text-gray-600 dark:text-gray-400 mt-2 mb-4">
        {{ postContent.description }}
      </h3>
      <div class="flex justify-between items-center text-sm">
        <UserLine :link="true" :author="post.author" :date="post.createdAt" />
        <div class="text-gray-600 dark:text-gray-400">
          {{ postContent.readingMins }} min read • {{ views }} views
        </div>
      </div>
      <div class="w-full bg-gray-300 my-4 rounded-md my-8">
        {{ postContent.cover }}
      </div>
      <ContentRenderer class="prose dark:prose-invert leading-6" :value="postContent" />
      <Separator>
        <template #icon>
          <Icon name="ph:info-bold" size="24" />
        </template>
        <div>
          <p class="text-justify">
            Thanks for reading this post! If you liked it, please consider sharing it with your friends. <strong>Leave a like and a comment just below!</strong>
          </p>
          <div class="flex items-center space-x-4 mt-4">
            <div class="flex space-x-2 blog-other select-none" @click.prevent="like()">
              <span>{{ likes }}</span>
              <Icon class="text-red-500" name="ph:heart-bold" size="24" />
            </div>
            <div class="blog-other" @click.prevent="top()">
              <Icon name="ph:arrow-up-bold" size="24" />
            </div>
            <div class="blog-other" @click.prevent="copy()">
              <Icon v-if="copied" class="text-green-400" name="lucide:clipboard-check" size="24" />
              <Icon v-else name="lucide:clipboard" size="24" />
            </div>
            <div v-if="isLoggedIn" class="blog-other" @click.prevent="handleSave">
              <Icon v-if="isSavedPost(post.slug)" name="material-symbols:bookmark-remove-outline" size="24" />
              <Icon v-else name="material-symbols:bookmark-add-outline-rounded" size="24" />
            </div>
          </div>
        </div>
      </Separator>
      <Separator>
        <template #icon>
          <Icon name="ph:chat-circle-bold" size="24" />
        </template>
        <div v-if="post.comments.length > 0" class="space-y-6 my-4">
          <div v-for="comment in post.comments" :id="`#comment-${comment.id}`" :key="comment.id">
            <div class="flex items-center space-x-4 flex-wrap">
              <UserLine :link="true" :author="comment.author" :date="comment.createdAt" />
              <DeleteButton
                v-if="isAdmin || (user && user.username && comment.author.username === user.username)"
                @click.prevent="handleDelete(comment.id)"
              />
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
      <form v-else-if="isLoggedIn && !isBlocked">
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
      <div v-else class="italic text-xs flex justify-center items-center space-x-1 mt-2">
        <Icon name="ri:question-line" size="16" />
        <h5>
          You need to be connected to comment this post
        </h5>
      </div>
    </main>
  </section>
</template>

<style scoped lang="scss">
.blog-other {
  @apply p-2 border border-dark cursor-pointer duration-300 hover:bg-gray-200 dark:hover:bg-dark-800;
}
</style>
