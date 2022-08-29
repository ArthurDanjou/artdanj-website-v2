<script setup lang="ts">
import type { FormData } from '~/types/types'
import { useTheme } from '~/composables/useTheme'

const { getTextColor, getBackgroundColor, getBackgroundHoverColor } = useTheme()

const form = ref({} as FormData)
const sent = ref(false)

const handleForm = () => {
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.value = {} as FormData
  }, 4000)
}
</script>

<template>
  <Card height="2" width="2">
    <CardDiv v-if="sent">
      Form sent
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
          placeholder="Type your message"
          class="p-4 bg-stone-100 rounded-md dark:bg-neutral-800 h-full resize-none outline-none duration-300 invalid:bg-red-600 required:bg-red-600"
        />
        <div class="w-full">
          <input
            type="submit"
            @click.prevent="handleForm()"
            class="w-full p-4 rounded-md cursor-pointer font-bold text-black"
            :class="[getBackgroundColor(), getBackgroundHoverColor()]"
          >
        </div>
      </form>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">

</style>
