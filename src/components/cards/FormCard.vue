<script setup lang="ts">
import type { FormData } from '~/types/types'
import { computed, ref, useAsyncData } from '#imports'

const form = ref({
  name: '',
  email: '',
  content: '',
} as FormData)
const sent = ref({ error: false, success: false })

const isSendable = computed(() => form.value.name.length >= 3 && form.value.email.length >= 5 && form.value.email.includes('@') && form.value.content.length >= 10)

const handleForm = async () => {
  if (sent.value.success || !isSendable.value)
    return

  if (form.value.name.length <= 0 || form.value.email.length <= 0 || form.value.content.length <= 0)
    return

  const { data } = await useAsyncData<{ code: number }>('form', () => {
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

const updateValue = (type: 'name' | 'email' | 'content', content: any) => {
  switch (type) {
    case 'name':
      form.value.name = content
      break
    case 'email':
      form.value.email = content
      break
    case 'content':
      form.value.content = content
      break
  }
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
        <div class="w-full">
          <Input icon="ri:user-3-line" label="Name" :content="form.name" @update="updateValue('name', $event)" />
        </div>
        <div class="w-full">
          <Input icon="material-symbols:alternate-email" label="Email" :content="form.email" @update="updateValue('email', $event)" />
        </div>
        <div class="w-full h-full">
          <TextArea
            class="h-full"
            :content="form.content"
            label="Write your message"
            @update="updateValue('content', $event)"
          />
        </div>
        <div class="w-full text-center">
          <Button icon="mingcute:send-plane-line" content="Send your message" :sendable="isSendable" @click.prevent="handleForm()" />
        </div>
      </form>
    </CardDiv>
  </Card>
</template>
