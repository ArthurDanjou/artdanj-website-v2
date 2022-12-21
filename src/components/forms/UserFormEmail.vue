<script setup lang="ts">
import { computed, ref, useRoute, useSupabase, useUser } from '#imports'

const { user } = useSupabase()
const route = useRoute()
const {getUserFromDB, refreshUser, updateUser} = await useUser(route.params.user)
const email = ref<string>(getUserFromDB.value!.email || '')
const editable = ref(getUserFromDB.value?.email.length === 0)
const isSendable = computed(() => email.value.length > 5 && email.value!.includes('@'))

const handleForm = async () => {
  if (!isSendable.value)
    return

  await updateUser(user?.value.email, {
    email: email.value,
  })
  await refreshUser()
  editable.value = false
}

const updateValue = (content: any) => {
  email.value = content
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
      <Input icon="material-symbols:alternate-email-rounded" class="w-full" label="Email" :content="email" @update="updateValue" />
      <p class="text-xs text-gray-600 dark:text-gray-400">
        Adding your email will allow you to turn on replies for comments or AMA questions.
      </p>
      <Button content="Save email" :sendable="isSendable" icon="fa-regular:save" @click.prevent="handleForm" />
    </form>
  </div>
</template>
