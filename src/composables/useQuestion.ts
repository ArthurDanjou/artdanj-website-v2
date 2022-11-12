import type { Comment } from '~/types/types'
import { useSupabaseUser } from '#imports'

export const useQuestion = () => {
  // todo use store email
  const user = useSupabaseUser()

  const getOwnQuestions = () => {
    return $fetch<Comment[]>(`/api/questions/${user.value?.email}`)
  }

  return {
    getOwnQuestions,
  }
}
