<script setup lang="ts">
import type { FormData } from '~/types/types'
import { ref, useAsyncData } from '#imports'

const form = ref({
  name: '',
  email: '',
  content: '',
} as FormData)
const sent = ref({ error: false, success: false })

const handleForm = async () => {
  if (sent.value.success)
    return

  if (form.value.name.length <= 0 || form.value.email.length <= 0 || form.value.content.length <= 0)
    return

  const { data } = await useAsyncData('form', () => {
    return $fetch('/api/forms/form', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        content: form.value.content,
      },
    })
  })

  if (data.value?.code === 200)
    sent.value.success = true
  else
    sent.value.error = true
}
</script>

<template>
  <Card height="2" width="2">
    <CardDiv v-if="sent.success" class="flex items-center justify-center">
      <div class="flex justify-center mb-8">
        <img class="w-1/2 animate-heartBeat animate-infinite animate-slower" src="~/assets/images/partying.png" alt="Image of me feasting">
      </div>
      <div class="text-xl text-spotify text-center">
        Your message was successfully sent ✅
      </div>
    </CardDiv>
    <CardDiv v-else-if="sent.error">
      <div class="flex justify-center mb-8">
        <img class="w-1/2" src="~/assets/images/crying.png" alt="Image of me sad">
      </div>
      <div class="text-xl text-red-500 text-center">
        The system encountered an error. Please try again later. ❌
      </div>
    </CardDiv>
    <CardDiv v-else>
      <form class="w-full h-full flex flex-col space-y-4">
        <div class="flex flex-col space-y-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Name"
            required
            class="p-4 bg-stone-100 rounded-md dark:bg-neutral-800 outline-none duration-300"
          >
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
            class="p-4 bg-stone-100 rounded-md dark:bg-neutral-800 outline-none duration-300"
          >
        </div>
        <textarea
          v-model="form.content"
          placeholder="Write your message"
          class="resize-none p-4 bg-stone-100 rounded-md dark:bg-neutral-800 h-full resize-none outline-none duration-300 invalid:bg-red-600 required:bg-red-600"
        />
        <div class="w-full">
          <input
            type="submit"
            class="w-full p-4 rounded-md cursor-pointer font-bold text-black bg-stone-200 hover:bg-stone-300 duration-500 dark:(bg-neutral-700 text-white hover:bg-neutral-500)"
            value="Send your message"
            @click.prevent="handleForm()"
          >
        </div>
      </form>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">
@keyframes fiestAnimation {
  0% {
    // todo do animation
  }
}
</style>
