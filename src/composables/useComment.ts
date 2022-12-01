import type { Comment } from '~/types/types'
import {useSupabase} from '#imports'

export const useComment = async () => {
  const { user } = useSupabase()

  const replyToQuestion = async (questionId: number, content: string) => {
    return await $fetch<Comment>('/api/comments/question', {
      method: 'post',
      body: {
        content,
        email: user.value.email,
        questionId,
      },
    })
  }

  const replyToPost = async (postId: number, content: string) => {
    return await $fetch<Comment>('/api/comments/post', {
      method: 'post',
      body: {
        content,
        email: user.value.email,
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
    replyToQuestion,
    replyToPost,
    deleteComment,
  }
}
