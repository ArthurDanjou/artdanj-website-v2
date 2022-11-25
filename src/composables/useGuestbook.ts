import { useAsyncData, useSupabaseUser } from '#imports'
import type { GuestBookMessage } from '~/types/types'

export const useGuestbook = async () => {
  // todo use store username
  const user = useSupabaseUser()

  const {
    data: getAllMessages,
    refresh: refreshAllMessages,
  } = await useAsyncData('guestbook:all', async () => await $fetch<GuestBookMessage[]>('/api/guestbook/messages'))

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

  const deleteMessage = async (email: string) => {
    await $fetch(`/api/guestbook/${email}`, {
      method: 'delete',
    })
    await refreshAllMessages()
  }

  return {
    getAllMessages,
    signMessage,
    deleteMessage,
  }
}
