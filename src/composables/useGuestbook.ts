import { useAsyncData, useSupabaseUser } from '#imports'
import type { GuestBookMessage } from '~/types/types'

export const useGuestbook = async () => {
  const user = useSupabaseUser()

  const getAllMessages = () => {
    return useAsyncData('guestbook:messages', () => $fetch<GuestBookMessage[]>('/api/guestbook/all'))
  }

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

  const getOwnMessage = () => {
    return useAsyncData('guestbook:own', () => {
      return $fetch<GuestBookMessage>(`/api/guestbook/${user.value?.email}`)
    })
  }

  const deleteMessage = async () => {
    await $fetch(`/api/guestbook/${user.value?.email}`, {
      method: 'delete',
    })
  }

  return {
    getAllMessages,
    signMessage,
    getOwnMessage,
    deleteMessage,
  }
}
