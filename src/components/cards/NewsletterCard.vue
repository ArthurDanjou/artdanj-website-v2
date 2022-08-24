<script setup lang="ts">
import type { NewsletterForm } from '~/types/types'

const form = ref<NewsletterForm>({
  email: '',
} as NewsletterForm)

const handleForm = () => {
  // todo send form
  if (form.value.email.length > 0) {
    console.log('not empty')
  }
  else {
    const button = document.getElementById('form-input')
    button.classList.add('form-animation')
    setTimeout(() => {
      button.classList.remove('form-animation')
    }, 1000)
  }
}
</script>

<template>
  <Card width="2">
    <CardDiv>
      <h1 class="text-3xl font-bold">
        Subscribe to my newsletter 📫
      </h1>
      <h3 class="text-sm text-stone-500 dark:text-gray-400 mt-2">
        Get emails from me about web development, tech, and early access to new articles.
      </h3>
      <div class="w-full my-4">
        <input
          id="form-input"
          v-model="form.email"
          type="email"
          required
          placeholder="Email address"
          class="w-full text-gray-400 dark:text-gray-500 py-2 border-b-2 border-dark bg-white dark:bg-dark-800 outline-none"
        >
        <div class="mt-1">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Your information is only used to receive new emails from me. <strong>No spam.</strong>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div
          class="flex items-center justify-center px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
              bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) hover:(shadow-dark text-black) dark:hover:text-white"
          @click.prevent="handleForm"
        >
          <p>Subscribe</p>
          <PlusIcon class="ml-2" />
        </div>
        <p class="ml-4">
          You will be subscriber number <span>x</span>.
        </p>
      </div>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">
.form-animation {
  animation: shake .7s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-10px);
  }
  30% {
    transform: translateX(10px);
  }
  45% {
    transform: translateX(-10px);
  }
  60% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  90% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
