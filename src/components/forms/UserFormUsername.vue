<script setup lang="ts">
import { computed, ref, useRoute, useRouter, useSupabase, useUser } from '#imports'

const { user } = useSupabase()
const route = useRoute()
const { getUserFromDB, updateUser } = await useUser(route.params.user)
const username = ref(getUserFromDB.value?.username)
const editable = ref(getUserFromDB.value?.username.length === 0)
const isSendable = computed(() => username.value!.length > 5)

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user?.value.email, {
    username: username.value,
  })
  await useRouter().push(`/user/${username.value}`)
  editable.value = false
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
      <input
        v-model="username"
        class="w-full border border-dark px-4 py-2 bg-stone-200 rounded-md dark:bg-neutral-800 duration-300"
        type="email"
      >
      <p class="text-xs text-red-400 dark:text-red-500">
        Updating your username will break any existing links to your profile, so you know, don’t do it too often.
      </p>
      <div class="flex">
        <div
          class="text-sm border border-.5 border-dark py-1 px-2 rounded-md font-bold duration-300"
          :class="isSendable ? 'button-sendable' : 'button-not-sendable'"
          @click.prevent="handleForm"
        >
          Save username
        </div>
      </div>
    </form>
  </div>
</template>
