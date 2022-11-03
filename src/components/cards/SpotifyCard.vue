<script setup lang="ts">
import type { SpotifyData } from '~/types/types'
import {computed, onMounted, onUnmounted, ref, useAsyncData, useElementHover, useMouseInElement} from '#imports'

const { data, refresh, pending } = await useAsyncData<SpotifyData>('spotify', () => $fetch('https://api.arthurdanjou.fr/spotify'))

const refreshDataInterval: null | ReturnType<typeof setInterval> = null
onMounted(() => {
  // todo remove comment
  // refreshDataInterval = setInterval(refresh, 5000)
})
onUnmounted(() => {
  if (refreshDataInterval)
    clearInterval(refreshDataInterval)
})

const spotify = ref(null)
const isHovered = useElementHover(spotify)
const { elementX, elementY } = useMouseInElement(spotify)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <Card ref="spotify" width="2">
    <CardDiv v-if="pending">
      <CardIcon icon="ph:spinner-bold" />
      <div class="flex flex-col space-y-4">
        <h1 class="title">
          Loading state...
        </h1>
        <h3 class="subtitle">
          Fetching data from spotify
        </h3>
      </div>
    </CardDiv>
    <CardLink v-else href="https://open.spotify.com/user/p3tavwpsi4zpz4xpmwlacwjoz" target="_blank">
      <div class="z-9 spotify-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
      <CardIcon icon="mdi:spotify" />
      <div v-if="data && data.is_playing" class="z-10 flex flex-col space-y-2 mt-4">
        <div class="flex space-x-2 items-center justify-center">
          <div v-if="data.is_playing" class="flex items-center h-30px">
            <div class="play-indicator" style="animation: playAnimation 0.85s infinite" />
            <div class="play-indicator" style="animation: playAnimation 1.26s infinite" />
            <div class="play-indicator" style="animation: playAnimation 0.62s infinite" />
            <div class="play-indicator" style="animation: playAnimation 1.11s infinite" />
            <div class="play-indicator" style="animation: playAnimation 0.79s infinite" />
            <div class="play-indicator" style="animation: playAnimation 1s infinite" />
          </div>
          <h1 class="text-3xl font-bold">
            I'm listening to
          </h1>
        </div>
        <div v-if="data !== null" class="z-10 flex space-x-2 justify-center">
          <h1 class="text-sm font-spotify">
            {{ data.name }},
          </h1>
          <h1 class="text-gray-600 dark:text-gray-400 text-sm font-spotify">
            {{ data.author }}
          </h1>
        </div>
      </div>
      <p v-else class="text-2xl font-bold text-center">
        Nothing playing right now.
      </p>
    </CardLink>
  </Card>
</template>

<style lang="scss">
.spotify-gradient {
  background: repeating-linear-gradient(to right, #1db954 0%, #1ed760 100%);
  filter: blur(100px);
  opacity: 0.7;
}

.title {
  @apply text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.play-indicator {
  @apply w-3px h-3px mr-3px rounded-3px bg-black dark:bg-white;
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

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
