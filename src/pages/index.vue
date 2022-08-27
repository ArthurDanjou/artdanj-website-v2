<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import AnnounceCard from '~/components/cards/AnnounceCard.vue'

const { getTextColor, getBackgroundColor } = useTheme()

useHead({
  title: 'Arthur Danjou - Software Engineer',
})
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
      <AnnounceCard />
      <ResumeCard />
      <Card>
        <CardLink href="uses" class="flex flex-col justify-center">
          <LampIcon :class="getTextColor()" />
          <h3 class="subtitle">
            Discover my dev environment
          </h3>
          <h1 class="title">
            How do I work ?
          </h1>
          <CardButton />
        </CardLink>
      </Card>
      <SpotifyCard />
      <Card height="2">
        Latest project
      </Card>
      <Card>
        <CardLink href="guestbook" class="flex flex-col justify-center">
          <BookIcon :class="getTextColor()" />
          <h3 class="subtitle">
            Do you want to leave a message ?
          </h3>
          <h1 class="title">
            Sign my book
          </h1>
          <CardButton />
        </CardLink>
      </Card>
      <GitHubCard />
      <TwitterCard />
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
      <Card width="2" height="2">
        Photos
      </Card>
      <Card width="2">
        Latest blog
      </Card>
    </CardContainer>
  </section>
</template>

<style lang="scss">
.title {
  @apply text-3xl font-bolder mb-8;
}

.subtitle {
  @apply mt-4 mb-2 text-sm text-stone-500 dark:text-gray-400 uppercase;
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
