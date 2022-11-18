import { computed, useAsyncData, useSupabaseUser } from '#imports'
import type { GuestBookMessage } from '~/types/types'

export const useGuestbook = async () => {
  // todo use store email
  const user = useSupabaseUser()

  const { data: getAllMessages, refresh: refreshAllMessages } = await useAsyncData('guestbook:all', async () => await $fetch<GuestBookMessage[]>('/api/guestbook/all'))

  const signMessage = async (content: string) => {
    await $fetch('/api/guestbook/guestbook', {
      method: 'post',
      body: {
        content,
        email: user.value?.email,
        username: user.value?.user_metadata.full_name,
      },
    })
  }

  const own = await $fetch<GuestBookMessage>(`/api/guestbook/${user.value?.email}`)
  const signed = computed(() => own !== null)

  const deleteMessage = async () => {
    await $fetch(`/api/guestbook/${user.value?.email}`, {
      method: 'delete',
    })
    await refreshAllMessages()
  }

  return {
    getAllMessages,
    signMessage,
    own,
    deleteMessage,
    signed,
  }
}
