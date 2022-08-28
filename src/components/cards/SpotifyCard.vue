<script setup lang="ts">
// todo add refresh
import type { SpotifyData } from '~/types/types'

const { data } = await useAsyncData<SpotifyData>('spotify', () => $fetch('https://api.arthurdanjou.fr/spotify'))
</script>

<template>
  <Card v-if="data !== null" width="2">
    <CardLink href="https://open.spotify.com/user/p3tavwpsi4zpz4xpmwlacwjoz" target="_blank">
      <div class="flex justify-center">
        <div>
          <SpotifyIcon />
        </div>
        <div class="flex items-center">
          <div class="flex">
            <div class="flex items-center mx-8">
              <div class="play-indicator" :style="data.is_playing ? 'animation: playAnimation 0.85s infinite' : ''" />
              <div class="play-indicator" :style="data.is_playing ? 'animation: playAnimation 1.26s infinite' : ''" />
              <div class="play-indicator" :style="data.is_playing ? 'animation: playAnimation 0.62s infinite' : ''" />
              <div class="play-indicator" :style="data.is_playing ? 'animation: playAnimation 1.11s infinite' : ''" />
              <div class="play-indicator" :style="data.is_playing ? 'animation: playAnimation 0.79s infinite' : ''" />
              <div class="play-indicator" :style="data.is_playing ? 'animation: playAnimation 1s infinite' : ''" />
            </div>
            <!-- todo implement spotify connection -->
            <div v-if="data.is_playing">
              <h1 class="font-black text-3xl font-spotify">
                {{ data.name }}
              </h1>
              <h1 class="text-stone-500 dark:text-gray-400 font-black text-xl font-spotify">
                {{ data.author }}
              </h1>
            </div>
            <p v-else class="text-2xl text-spotify">
              Nothing playing right now.
            </p>
          </div>
        </div>
      </div>
      <CardButton />
    </CardLink>
  </Card>
</template>

<style scoped lang="scss">
.play-indicator {
  @apply w-3px h-3px mr-3px rounded-3px bg-spotify flex items-center justify-center;
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
