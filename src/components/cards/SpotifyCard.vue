<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SpotifyData } from '~/types/types'

const { t } = useI18n()
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
  <Card v-if="data !== null" width="2">
    <CardLink href="https://open.spotify.com/user/p3tavwpsi4zpz4xpmwlacwjoz" target="_blank">
      <CardIcon>
        <Icon name="mdi:spotify" size="42px" style="color: #1DB954" />
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
          <h1 class="text-2xl text-spotify font-bold">
            {{ t('cards.spotify.playing') }}
          </h1>
        </div>
        <div class="flex space-x-2">
          <h1 class="font-black text-xl font-spotify">
            {{ data.name }},
          </h1>
          <h1 class="text-gray-600 dark:text-gray-400 font-black text-lg font-spotify">
            {{ data.author }}
          </h1>
        </div>
      </div>
      <p v-else class="text-2xl text-spotify font-bold">
        {{ t('cards.spotify.nothing') }}
      </p>
      <CardButton />
    </CardLink>
  </Card>
</template>

<style lang="scss">
.play-indicator {
  @apply w-3px h-3px mr-3px rounded-3px bg-spotify;
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
</style>
