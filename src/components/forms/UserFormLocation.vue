<script setup lang="ts">
import { computed, ref, useRoute, useSupabaseUser, useUser } from '#imports'

// todo user store user
const user = useSupabaseUser()
const route = useRoute()
const { getUserFromDB, refreshUser, updateUser } = await useUser(route.params.user)
const location = ref(getUserFromDB.value?.location)
const editable = ref(Boolean(getUserFromDB.value?.location === null))
const isSendable = computed(() => location.value && location.value!.length >= 3)

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user.value?.email, {
    location: location.value,
  })
  await refreshUser()
  editable.value = false
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <h1 class="font-bold text-xl">
      Location
    </h1>
    <div v-if="getUserFromDB.location !== null" class="flex space-x-2">
      <h3>
        {{ getUserFromDB.location }}
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
      Your location was never set. Just fill the form below.
    </p>
    <form v-if="editable" class="space-y-2 w-full">
      <input
        v-model="location"
        class="w-full border border-dark px-4 py-2 bg-stone-200 rounded-md dark:bg-neutral-800 duration-300"
        type="email"
      >
      <p class="text-xs text-gray-600 dark:text-gray-400">
        Your location will only be visible on your profile page.
      </p>
      <div class="flex">
        <div
          class="text-sm border border-.5 border-dark py-1 px-2 rounded-md font-bold duration-300"
          :class="isSendable ? 'button-sendable' : 'button-not-sendable'"
          @click.prevent="handleForm"
        >
          Save location
        </div>
      </div>
    </form>
  </div>
</template>
