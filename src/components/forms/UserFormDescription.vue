<script setup lang="ts">
import { computed, ref, useRoute, useSupabase, useUser } from '#imports'

const { user } = useSupabase()
const route = useRoute()
const { getUserFromDB, refreshUser, updateUser } = await useUser(route.params.user)
const description = ref(getUserFromDB.value?.description)
const editable = ref(Boolean(getUserFromDB.value?.description === null))
const isSendable = computed(() => description.value!.length >= 3)

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user.value?.email, {
    description: description.value,
  })
  await refreshUser()
  editable.value = false
}

const updateValue = (content: any) => {
  description.value = content
}
</script>

<template>
  <div class="flex flex-col space-y-1">
    <h1 class="font-bold text-xl">
      Description
    </h1>
    <div v-if="getUserFromDB && getUserFromDB.description !== null" class="flex space-x-2">
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
      <Input icon="material-symbols:description-outline-rounded" class="w-full" label="Description" :content="description" @update="updateValue" />
      <p class="text-xs text-gray-600 dark:text-gray-400">
        Describe yourself in a few words.
      </p>
      <Button content="Save description" :sendable="isSendable" icon="fa-regular:save" @click.prevent="handleForm" />
    </form>
  </div>
</template>
