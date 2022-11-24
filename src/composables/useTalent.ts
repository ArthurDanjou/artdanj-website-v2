import { useAsyncData } from '#imports'
import type { Talent } from '~/types/types'

export const useTalent = async () => {
  const {
    data: getTalents,
    refresh: refreshTalents,
  } = await useAsyncData('talents:all', async () => await $fetch<Talent[]>('/api/talents/talents'))

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

  return {
    getTalents,
    refreshTalents,
    toggleFavorite,
  }
}
