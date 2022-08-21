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
          <p class="text-stone-500 dark:text-gray-400 mb-4">
            A software engineer passionate about networking, infrastructure and cloud but also a student living in France.
          </p>
          <CardButton />
        </CardLink>
      </Card>
      <ResumeCard />
      <MapCard />
      <Card width="2">
        <CardLink href="https://open.spotify.com/user/p3tavwpsi4zpz4xpmwlacwjoz" target="_blank">
          <div class="flex justify-center">
            <div>
              <SpotifyIcon />
            </div>
            <div class="flex items-center">
              <div class="flex">
                <div class="flex items-center mx-8">
                  <div class="play-indicator" style="animation: playAnimation 0.85s infinite" />
                  <div class="play-indicator" style="animation: playAnimation 1.26s infinite" />
                  <div class="play-indicator" style="animation: playAnimation 0.62s infinite" />
                  <div class="play-indicator" style="animation: playAnimation 1.11s infinite" />
                  <div class="play-indicator" style="animation: playAnimation 0.79s infinite" />
                  <div class="play-indicator" style="animation: playAnimation 1s infinite" />
                </div>
                <p v-if="true" class="text-2xl text-spotify">
                  Nothing playing right now.
                </p>
                <div v-else class="">
                  <h1 class="font-black text-3xl font-spotify">
                    Mona Lisa
                  </h1>
                  <h1 class="text-stone-500 dark:text-gray-400 font-black text-xl font-spotify">
                    Booba
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <CardButton />
        </CardLink>
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
.play-indicator {
  @apply w-3px h-3px mr-3px rounded-3px bg-spotify flex items-center justify-center;
}

.title {
  @apply text-3xl font-bold mb-8;
}

@keyframes playAnimation {
  0% {
    height: 3px;
  }
  50% {
    height: 20px;
  }
  100% {
    height: 3px;
  }
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
