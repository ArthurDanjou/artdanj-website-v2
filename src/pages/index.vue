<script setup lang="ts">
import { computed, ref, useElementHover, useHead, useLatestPost, useParallax } from '#imports'

const { data: post } = await useLatestPost()

useHead({
  title: 'Arthur Danjou - Software Engineer',
})

const main = ref(null)
const { tilt, roll } = useParallax(main)
const isHovered = useElementHover(main)
const cardStyle = computed(() => ({
  transform: `rotateX(${isHovered.value ? roll.value * 45 : 0}deg) rotateY(${isHovered.value ? tilt.value * 25 : 0}deg)`,
}))
</script>

<template>
  <section>
    <CardContainer>
      <Card ref="main" order="first" width="2" :style="cardStyle">
        <CardLink href="about" class="flex flex-col">
          <div class="h-full flex items-center">
            <div class="bg-photo h-32 w-32 rounded-1/2" />
          </div>
          <div class="flex flex flex-col space-y-4">
            <h1 class="font-bold text-4xl mt-4">
              Hey, I am
              <span class="mx-1">Arthur Danjou</span>
              <span class="hey-animation inline-block">👋</span>
            </h1>
            <p class="text-gray-600 dark:text-gray-400">
              A software engineer passionate about networking, infrastructure and cloud but also a student living in France.
            </p>
          </div>
        </CardLink>
      </Card>
      <AnnounceCard />
      <ResumeCard />
      <Card order="last">
        <CardLink href="uses" class="flex flex-col justify-center">
          <CardIcon>
            <Icon name="lucide:lamp-desk" size="42px" />
          </CardIcon>
          <div class="flex flex-col space-y-4">
            <h1 class="title">
              How do I work ?
            </h1>
            <h3 class="subtitle">
              Discover my development environment
            </h3>
          </div>
        </CardLink>
      </Card>
      <Card order="last">
        <CardLink href="guestbook" class="flex flex-col justify-center">
          <CardIcon>
            <Icon name="icon-park-outline:bookshelf" size="42px" />
          </CardIcon>
          <div class="flex flex-col space-y-4">
            <h1 class="title">
              Sign my book
            </h1>
            <h3 class="subtitle">
              Do you want to leave a message ?
            </h3>
          </div>
        </CardLink>
      </Card>
      <ContactCard />
      <SpotifyCard />
      <TwitterCard />
      <GitHubCard />
      <Card height="2">
        Project
      </Card>
      <Card width="2">
        <CardLink href="/projects">
          <div class="flex w-full justify-between">
            <div class="flex flex-col items-center">
              <CardIcon :stick="true">
                <Icon name="uil:web-grid" size="42px" />
              </CardIcon>
              <p class="subtitle mt-2">
                Development
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CardIcon :stick="true">
                <Icon name="ic:outline-design-services" size="42px" />
              </CardIcon>
              <p class="subtitle mt-2">
                Design
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CardIcon :stick="true">
                <Icon name="uil:comment" size="42px" />
              </CardIcon>
              <p class="subtitle mt-2">
                Strategy
              </p>
            </div>
          </div>
          <h1 class="title !mb-0">
            What I do
          </h1>
        </CardLink>
      </Card>
      <InstagramCard />
      <BlogCard width="2" :post="post[0]" />
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply mt-4 text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.bg-photo {
  background-image: url("~/assets/images/hand.png");
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
