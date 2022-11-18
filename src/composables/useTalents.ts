import { useAsyncData } from '#imports'

export const useTalents = async () => {
  const {
    data: getTalents,
    refresh: refreshTalents,
  } = await useAsyncData('talents', async () => await $fetch('/api/talents/talents'))

  return {
    getTalents,
    refreshTalents,
  }
}
