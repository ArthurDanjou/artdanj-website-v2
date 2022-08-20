<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getTextColor, getBackgroundColor } = useTheme()
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
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            A software engineer passionate about networking, infrastructure and cloud but also a student living in France.
          </p>
          <CardButton />
        </CardLink>
      </Card>
      <ResumeCard />
      <MapCard />
      <Card width="2">
        <CardDiv>
          <SpotifyIcon />
        </CardDiv>
      </Card>
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
        Newsletter
      </Card>
    </CardContainer>
  </section>
</template>

<style lang="scss">
.title {
  @apply text-3xl font-bold mb-8;
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
