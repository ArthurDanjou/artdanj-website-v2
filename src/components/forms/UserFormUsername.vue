<script setup lang="ts">
import { computed, ref, useRoute, useRouter, useSupabase, useUser } from '#imports'
import type { User } from '~/types/types'

const { user } = useSupabase()
const route = useRoute()
const { getUserFromDB, updateUser } = await useUser(route.params.user)
const username = ref(getUserFromDB.value?.username)
const editable = ref(getUserFromDB.value?.username.length === 0)

const isUsernameTaken = computedAsync<boolean>(async () => {
  const newUser = await $fetch<User>(`/api/users/${username.value}`)
  return newUser?.username === username.value
}, false)

const isSendable = computed(() => username.value!.length > 5 || !isUsernameTaken.value)
const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user?.value.email, {
    username: username.value,
  })
  await useRouter().push(`/user/${username.value}`)
  editable.value = false
  await window.location.reload()
}

const updateValue = (content: any) => {
  username.value = content
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <h1 class="font-bold text-xl">
      Username
    </h1>
    <div class="flex space-x-2">
      <h3 class="text-gray-400 dark:text-gray-600">
        @<span class="text-black dark:text-white">{{ getUserFromDB.username }}</span>
      </h3>
      <span>·</span>
      <div v-if="!editable" class="content-link" @click.prevent="editable = true">
        Edit
      </div>
      <div v-else class="content-link" @click.prevent="editable = false">
        Cancel
      </div>
    </div>
    <form v-if="editable" class="space-y-2 w-full">
      <Input icon="ri:user-3-line" class="w-full" label="Username" :content="username" @update="updateValue" />
      <p v-if="isUsernameTaken" class="text-xs text-red-400 dark:text-red-500">
        This username is already taken.
      </p>
      <p v-else class="text-xs text-red-400 dark:text-red-500">
        Updating your username will break any existing links to your profile, so you know, don’t do it too often.
      </p>
      <Button content="Save username" :sendable="isSendable" icon="fa-regular:save" @click.prevent="handleForm" />
    </form>
  </div>
</template>
