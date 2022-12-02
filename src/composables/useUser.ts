import type { SavedPost, User } from '~/types/types'
import { computed, useAsyncData } from '#imports'
import { useUserStore } from '~/store/user'

interface UserUpdate {
  username?: string
  email?: string
  location?: string
  description?: string
  website?: string
}

export const useUser = async (username: string | null | string[]) => {
  const { setUser } = useUserStore()
  const {
    data: getUserFromDB,
    refresh: refreshUser,
  } = await useAsyncData(`user:${username}`, async () => await $fetch<User>(`/api/users/${username}`))

  const updateUser = async (email: string | undefined, user: UserUpdate) => {
    if (!email)
      return
    const updated = await $fetch<User>(`/api/users/${email}`, {
      method: 'PUT',
      body: {
        ...user,
      },
    })
    await refreshUser()
    await setUser(updated)
  }

  const savePost = async (slug: string) => {
    await $fetch<SavedPost>('/api/users/savedposts/create', {
      method: 'POST',
      body: {
        username: getUserFromDB.value?.username,
        slug,
      },
    })
    await refreshUser()
  }

  const isSavedPost = (slug: string) => {
    return getUserFromDB.value?.savedPosts && getUserFromDB.value?.savedPosts.some(post => post.post.slug === slug)
  }

  const unsavePost = async (slug: string) => {
    const id = getUserFromDB.value?.savedPosts.find(post => post.post.slug === slug)?.id
    await $fetch<SavedPost>(`/api/users/savedposts/${id}`, {
      method: 'DELETE',
    })
    await refreshUser()
  }

  const hasSignedGuestbook = computed(() => getUserFromDB.value?.guestbook?.id !== undefined)
  const getGuestBookMessage = computed(() => getUserFromDB.value?.guestbook)

  const deleteUser = async () => {
    await $fetch(`/api/users/${username}`, {
      method: 'DELETE',
    })
  }

  return {
    getUserFromDB,
    refreshUser,
    updateUser,
    savePost,
    unsavePost,
    isSavedPost,
    deleteUser,
    hasSignedGuestbook,
    getGuestBookMessage,
  }
}
