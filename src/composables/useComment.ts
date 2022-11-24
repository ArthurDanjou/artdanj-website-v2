import type { Comment } from '~/types/types'
import { useAsyncData, useSupabaseUser } from '#imports'

export const useComment = async () => {
  // todo use store email
  const user = useSupabaseUser()

  const { data: getOwnComments, refresh: refreshOwnComments } = await useAsyncData('comments:own', async () => await $fetch<Comment[]>(`/api/comments/${user.value?.email}`))

  const replyToQuestion = async (questionId: number, content: string) => {
    return await $fetch<Comment>('/api/comments/question', {
      method: 'post',
      body: {
        content,
        email: user.value?.email,
        questionId,
      },
    })
  }

  const replyToPost = async (postId: number, content: string) => {
    return await $fetch<Comment>('/api/comments/post', {
      method: 'post',
      body: {
        content,
        email: user.value?.email,
        postId,
      },
    })
  }

  const deleteComment = async (commentId: number) => {
    await $fetch<Comment>(`/api/comments/${commentId}`, {
      method: 'delete',
    })
  }

  return {
    getOwnComments,
    refreshOwnComments,
    replyToQuestion,
    replyToPost,
    deleteComment,
  }
}
