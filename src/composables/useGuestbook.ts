import { useAsyncData, useSupabaseUser } from '#imports'
import type { GuestBookMessage } from '~/types/types'

export const useGuestbook = async () => {
  const user = useSupabaseUser()

  const getAllMessages = () => {
    return useAsyncData('guestbook:messages', () => $fetch<GuestBookMessage[]>('/api/guestbooks'))
  }

  const signMessage = async (content: string) => {
    await $fetch('/api/guestbook', {
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
      return $fetch<GuestBookMessage>('/api/guestbook', {
        method: 'GET',
        query: {
          email: user.value?.email,
        },
      })
    })
  }

  const deleteMessage = async () => {
    await $fetch('/api/guestbook', {
      method: 'delete',
      body: {
        email: user.value?.email,
      },
    })
  }

  return {
    getAllMessages,
    signMessage,
    getOwnMessage,
    deleteMessage,
  }
}
