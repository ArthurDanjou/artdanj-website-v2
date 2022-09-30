<script setup lang="ts">
import type { SpotifyData } from '~/types/types'
import { useAsyncData } from '#imports'

const { data, refresh } = await useAsyncData<SpotifyData>('spotify', () => $fetch('https://api.arthurdanjou.fr/spotify'))

const refreshDataInterval: null | ReturnType<typeof setInterval> = null
onMounted(() => {
  // todo remove comment
  // refreshDataInterval = setInterval(refresh, 5000)
})
onUnmounted(() => {
  if (refreshDataInterval)
    clearInterval(refreshDataInterval)
})
</script>

<template>
  <Card width="2">
    <CardLink v-if="data !== null" href="https://open.spotify.com/user/p3tavwpsi4zpz4xpmwlacwjoz" target="_blank">
      <CardIcon>
        <Icon name="mdi:spotify" size="42px" />
      </CardIcon>
      <div v-if="data.is_playing" class="flex flex-col space-y-2 mt-4">
        <div class="flex space-x-2 items-center">
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
        <div class="flex space-x-2">
          <h1 class="text-sm font-spotify">
            {{ data.name }},
          </h1>
          <h1 class="text-gray-600 dark:text-gray-400 text-sm font-spotify">
            {{ data.author }}
          </h1>
        </div>
      </div>
      <p v-else class="text-2xl font-bold">
        Nothing playing right now.
      </p>
      <CardButton />
    </CardLink>
    <CardDiv v-else>
      <CardIcon>
        <Icon style="animation: spin 2s infinite" name="ph:spinner-bold" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
        <h1 class="title">
          Loading state...
        </h1>
        <h3 class="subtitle">
          Fetching data from spotify
        </h3>
      </div>
    </CardDiv>
  </Card>
</template>

<style lang="scss">
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
