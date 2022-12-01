<script setup lang="ts">
import { computed, ref, useRoute, useSupabase, useUser } from '#imports'

const { user } = useSupabase()
const route = useRoute()
const { getUserFromDB, refreshUser, updateUser } = await useUser(route.params.user)
const email = ref(getUserFromDB.value?.email)
const editable = ref(getUserFromDB.value?.email.length === 0)
const isSendable = computed(() => email.value!.length > 5 && email.value!.includes('@'))

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user?.value.email, {
    email: email.value,
  })
  await refreshUser()
  editable.value = false
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <h1 class="font-bold text-xl">
      Email
    </h1>
    <div v-if="getUserFromDB" class="flex space-x-2">
      <h3>
        {{ getUserFromDB.email }}
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
        v-model="email"
        class="w-full border border-dark px-4 py-2 bg-stone-200 rounded-md dark:bg-neutral-800 duration-300"
        type="email"
      >
      <p class="text-xs text-gray-600 dark:text-gray-400">
        Adding your email will allow you to turn on replies for comments or AMA questions.
      </p>
      <div class="flex">
        <div
          class="text-sm border border-.5 border-dark py-1 px-2 rounded-md font-bold duration-300"
          :class="isSendable ? 'button-sendable' : 'button-not-sendable'"
          @click.prevent="handleForm"
        >
          Save email
        </div>
      </div>
    </form>
  </div>
</template>
