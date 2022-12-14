<script setup lang="ts">
import { computed, ref, useRoute, useSupabase, useUser } from '#imports'

const { user } = useSupabase()
const route = useRoute()
const { getUserFromDB, refreshUser, updateUser } = await useUser(route.params.user)
const location = ref(getUserFromDB.value?.location)
const editable = ref(Boolean(getUserFromDB.value?.location === null))
const isSendable = computed(() => location.value!.length >= 3)

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user.value?.email, {
    location: location.value,
  })
  await refreshUser()
  editable.value = false
}

const updateValue = (content: any) => {
  location.value = content
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <h1 class="font-bold text-xl">
      Location
    </h1>
    <div v-if="getUserFromDB && getUserFromDB.location !== null" class="flex space-x-2">
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
      <Input icon="material-symbols:location-on-outline" class="w-full" label="Location" :content="location" @update="updateValue" />
      <p class="text-xs text-gray-600 dark:text-gray-400">
        Your location will only be visible on your profile page.
      </p>
      <Button content="Save location" :sendable="isSendable" icon="fa-regular:save" @click.prevent="handleForm" />
    </form>
  </div>
</template>
