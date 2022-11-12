import type { Comment } from '~/types/types'
import { useSupabaseUser } from '#imports'

export const useComment = () => {
  // todo use store email
  const user = useSupabaseUser()

  const getOwnComments = () => {
    return $fetch<Comment[]>(`/api/comments/${user.value?.email}`)
  }

  return {
    getOwnComments,
  }
}
