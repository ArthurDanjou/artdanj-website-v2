import { defineStore } from 'pinia'
import type { User } from '~/types/types'
import { persistedState } from '#imports'
import { Role } from '~/types/types'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {} as User,
    }
  },
  getters: {
    getUser: state => state.user,
    isLoggedIn: state => state.user && state.user.email !== undefined,
    isAdmin: state => state.user?.role === Role[Role.ADMIN],
    isBlocked: state => state.user?.role === Role[Role.BLOCKED],
  },
  actions: {
    setUser(newUser: User) {
      this.user = newUser
    },
    resetUser() {
      this.user = null as unknown as User
    },
  },
  persist: {
    key: 'user',
    storage: persistedState.cookiesWithOptions({
      sameSite: 'lax',
      path: '/',
    }),
  },
})
