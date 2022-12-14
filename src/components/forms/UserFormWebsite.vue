<script setup lang="ts">
import { computed, ref, useRoute, useSupabase, useUser } from '#imports'

const { user } = useSupabase()
const route = useRoute()
const { getUserFromDB, refreshUser, updateUser } = await useUser(route.params.user)
const website = ref(getUserFromDB.value?.website)
const editable = ref(Boolean(getUserFromDB.value?.website === null))
const isSendable = computed(() => website.value!.length >= 3)

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user.value?.email, {
    website: website.value,
  })
  await refreshUser()
  editable.value = false
}

const updateValue = (content: any) => {
  website.value = content
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <h1 class="font-bold text-xl">
      Website
    </h1>
    <div v-if="getUserFromDB && getUserFromDB.location !== null" class="flex space-x-2">
      <h3>
        {{ getUserFromDB.website }}
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
      Your website was never set. Just fill the form below.
    </p>
    <form v-if="editable" class="space-y-2 w-full">
      <Input icon="ph:globe-hemisphere-west-bold" class="w-full" label="Website" :content="website" @update="updateValue" />
      <p class="text-xs text-gray-600 dark:text-gray-400">
        Your website will be visible on your profile page.
      </p>
      <Button content="Save website" :sendable="isSendable" icon="fa-regular:save" @click.prevent="handleForm" />
    </form>
  </div>
</template>
