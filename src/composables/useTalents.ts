import { useAsyncData } from '#imports'
import type { Talent } from '~/types/types'

export const useTalents = async () => {
  const {
    data: getTalents,
    refresh: refreshTalents,
  } = await useAsyncData('talents', async () => await $fetch('/api/talents/talents'))

  const toggleFavorite = async (talent: Talent, favorite: boolean) => {
    await $fetch<Talent>(`/api/talents/${talent.id}`, {
      method: 'put',
      body: {
        talent: {
          ...talent,
          favorite,
        },
      },
    })
    await refreshTalents()
  }

  const deleteTalent = async (id: number | null) => {
    if (id == null)
      return
    await $fetch<Talent>(`/api/talents/${id}`, {
      method: 'delete',
    })
    await refreshTalents()
  }

  return {
    getTalents,
    refreshTalents,
    toggleFavorite,
    deleteTalent,
  }
}
