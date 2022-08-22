<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import type { NewsletterForm } from '~/types/types'

const { getTextColor, getBackgroundColor } = useTheme()

const form = ref<NewsletterForm>({} as NewsletterForm)

const handleForm = () => {
  // todo send form
}
</script>

<template>
  <section>
    <CardContainer>
      <Card width="2" height="2">
        <CardLink href="about" class="flex flex-col justify-center">
          <div class="bg-photo h-48 w-48 rounded-1/2" :class="getBackgroundColor()" />
          <h1 class="flex font-bold text-4xl my-8">
            Hi, I am
            <span class="mx-2" :class="getTextColor()">Arthur Danjou</span>
            <span class="hey-animation">👋</span>
          </h1>
          <p class="text-stone-500 dark:text-gray-400 mb-4">
            A software engineer passionate about networking, infrastructure and cloud but also a student living in France.
          </p>
          <CardButton />
        </CardLink>
      </Card>
      <ResumeCard />
      <MapCard />
      <SpotifyCard />
      <Card height="2">
        Latest project
      </Card>
      <TwitterCard />
      <GitHubCard />
      <ContactCard />
      <Card width="2">
        <CardDiv>
          <div class="flex w-full justify-between">
            <div class="flex flex-col items-center">
              <DevIcon :class="getTextColor()" />
              <p class="subtitle">
                Development
              </p>
            </div>
            <div class="flex flex-col items-center">
              <DesignIcon :class="getTextColor()" />
              <p class="subtitle">
                Design
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CommentIcon :class="getTextColor()" />
              <p class="subtitle">
                Strategy
              </p>
            </div>
          </div>
          <h1 class="title !mb-0">
            What I do
          </h1>
        </CardDiv>
      </Card>
      <Card>
        Photos
      </Card>
      <Card width="2">
        Latest blog
      </Card>
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
            <button
              class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
              bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) hover:(shadow-dark text-black) dark:hover:text-white"
            >
              <div class="flex items-center justify-center flex items-center justify-center">
                Subscribe
              </div>
            </button>
            <p class="ml-4">
              You will be subscriber number <span>x</span>.
            </p>
          </div>
        </CardDiv>
      </Card>
    </CardContainer>
  </section>
</template>

<style lang="scss">
.title {
  @apply text-3xl font-bolder mb-8;
}

.subtitle {
  @apply my-4 text-sm text-stone-500 dark:text-gray-400 uppercase;
}

.bg-photo {
  background-image: url("~/assets/images/MainPhoto.png");
  @apply bg-clip-content bg-center bg-contain border-dark border-2;
}

.hey-animation {
  animation: waveAnimation 6s infinite;
}

@keyframes waveAnimation {
  0% {
    transform: rotate(0)
  }
  5% {
    transform: rotate(14deg)
  }
  10% {
    transform: rotate(-8deg)
  }
  15% {
    transform: rotate(14deg)
  }
  20% {
    transform: rotate(-4deg)
  }
  25% {
    transform: rotate(10deg)
  }
  30% {
    transform: rotate(0)
  }
  35% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(0)
  }
}
</style>
