<script setup lang="ts">
import { computed, ref, useRoute, useSupabaseUser, useUser } from '#imports'

// todo users store users
const user = useSupabaseUser()
const route = useRoute()
const { getUserFromDB, refreshUser, updateUser } = await useUser(route.params.user)
const description = ref(getUserFromDB.value?.description)
const editable = ref(Boolean(getUserFromDB.value?.description === null))
const isSendable = computed(() => description.value && description.value!.length >= 3)

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user.value?.email, {
    description: description.value,
  })
  await refreshUser()
  editable.value = false
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <h1 class="font-bold text-xl">
      Description
    </h1>
    <div v-if="getUserFromDB.description !== null" class="flex space-x-2">
      <h3>
        {{ getUserFromDB.description }}
      </h3>
      <span>·</span>
      <div v-if="!editable" class="content-link" @click.prevent="editable = true">
        Edit
      </div>
      <div v-else class="content-link" @click.prevent="editable = false">
        Cancel
      </div>
    </div>
    <p v-else class="text-gray-600 dark:text-gray-400">
      Your description was never set. Just fill the form below.
    </p>
    <form v-if="editable" class="space-y-2 w-full">
      <input
        v-model="description"
        class="w-full border border-dark px-4 py-2 bg-stone-200 rounded-md dark:bg-neutral-800 duration-300"
        type="email"
      >
      <p class="text-xs text-gray-600 dark:text-gray-400">
        Describe yourself in a few words.
      </p>
      <div class="flex">
        <div
          class="text-sm border border-.5 border-dark py-1 px-2 rounded-md font-bold duration-300"
          :class="isSendable ? 'button-sendable' : 'button-not-sendable'"
          @click.prevent="handleForm"
        >
          Save description
        </div>
      </div>
    </form>
  </div>
</template>
