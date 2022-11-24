import type { RouteParamValue } from 'vue-router'
import type { Question } from '~/types/types'
import { useAsyncData, useSupabaseUser } from '#imports'

export const useQuestion = async () => {
  // todo use store email
  const user = useSupabaseUser()

  const {
    data: getAllQuestions,
    refresh: refreshAllQuestions,
  } = await useAsyncData('questions:all', async () => await $fetch<Question[]>('/api/questions/questions'))

  const getQuestion = (id: string | RouteParamValue[]) => {
    return useAsyncData<Question>(`question:id:${id}`, async () => await $fetch<Question>(`/api/questions/${id}`))
  }

  const deleteQuestion = async (id: number | null) => {
    if (id == null)
      return
    await $fetch<Question>(`/api/questions/${id}`, {
      method: 'delete',
    })
    await refreshAllQuestions()
  }

  return {
    getAllQuestions,
    refreshAllQuestions,
    getQuestion,
    deleteQuestion,
  }
}
