import { defineStore } from 'pinia'
import type { User } from '~/types/types'
import { Role } from '~/types/types'
import { computed, ref } from '#imports'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>()
  const getUser = computed(() => user.value)

  const setUser = (newUser: User) => {
    console.log('setUser', newUser)
    user.value = newUser
    console.log(user)
  }

  const resetUser = () => {
    user.value = null
  }

  const isLoggedIn = computed(() => !!user.value)
  const getRole = computed(() => user.value?.role)
  const isAdmin = computed(() => getRole.value === Role.ADMIN)
  const isBlocked = computed(() => getRole.value === Role.BLOCKED)

  return {
    setUser,
    resetUser,
    isLoggedIn,
    isAdmin,
    isBlocked,
    getUser,
    getRole,
  }
}, {
  persist: {
    key: 'user',
    afterRestore: (context) => {
      console.log(context.store)
    },
  },
})
