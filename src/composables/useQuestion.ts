import type { Comment } from '~/types/types'
import { useAsyncData, useSupabaseUser } from '#imports'

export const useQuestion = async () => {
  // todo use store email
  const user = useSupabaseUser()

  const { data: getOwnQuestions, refresh: refreshOwnQuestions } = await useAsyncData('questions:own', async () => await $fetch<Comment[]>(`/api/questions/${user.value?.email}`))

  return {
    getOwnQuestions,
    refreshOwnQuestions,
  }
}
