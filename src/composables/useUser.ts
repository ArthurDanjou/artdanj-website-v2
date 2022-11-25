import type { RouteParamValue } from 'vue-router'
import { useAsyncData } from '#build/imports'
import type { SavedPost, User } from '~/types/types'

interface UserUpdate {
  username?: string
  email?: string
  location?: string
  description?: string
}

export const useUser = async (username: string | RouteParamValue[]) => {
  const {
    data: getUserFromDB,
    refresh: refreshUser,
  } = await useAsyncData(`user:${username}`, async () => await $fetch<User>(`/api/users/${username}`))

  const updateUser = async (email: string | undefined, user: UserUpdate) => {
    if (!email)
      return
    await $fetch(`/api/users/${email}`, {
      method: 'PUT',
      body: {
        ...user,
      },
    })
    await refreshUser()
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
    return getUserFromDB.value?.savedPosts.some(post => post.post.slug === slug)
  }

  const unsavePost = async (slug: string) => {
    const id = getUserFromDB.value?.savedPosts.find(post => post.post.slug === slug)?.id
    await $fetch<SavedPost>(`/api/users/savedposts/${id}`, {
      method: 'DELETE',
    })
    await refreshUser()
  }

  return {
    getUserFromDB,
    refreshUser,
    updateUser,
    savePost,
    unsavePost,
    isSavedPost,
  }
}
