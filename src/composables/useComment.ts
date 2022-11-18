import type { Comment } from '~/types/types'
import { useAsyncData, useSupabaseUser } from '#imports'

export const useComment = async () => {
  // todo use store email
  const user = useSupabaseUser()

  const { data: getOwnComments, refresh: refreshOwnComments } = await useAsyncData('comments:own', async () => await $fetch<Comment[]>(`/api/comments/${user.value?.email}`))

  return {
    getOwnComments,
    refreshOwnComments,
  }
}
