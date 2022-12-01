import type { RouteParamValue } from 'vue-router'
import type { Question } from '~/types/types'
import { useAsyncData, useSupabase } from '#imports'

export const useQuestion = async () => {
  const { user } = useSupabase()

  const {
    data: getAllQuestions,
    refresh: refreshAllQuestions,
  } = await useAsyncData('questions:all', async () => await $fetch<Question[]>('/api/questions/questions'))

  const getQuestion = (id: string | RouteParamValue[]) => {
    return useAsyncData<Question>(`question:id:${id}`, async () => await $fetch<Question>(`/api/questions/${id}`))
  }

  const createQuestion = async (title: string, description: string) => {
    await $fetch('/api/questions/question', {
      method: 'POST',
      body: {
        title,
        description,
        email: user.value?.email,
      },
    })
    await refreshAllQuestions()
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
    createQuestion,
  }
}
