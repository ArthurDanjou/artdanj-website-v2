<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import MapDay from '~/assets/images/MapDay.png'
import MapNight from '~/assets/images/MapNight.png'

const map = ref(null)
const zoomIn = () => {
  map.value.zoomIn({
    duration: 600,
  })
}

const zoomOut = () => {
  map.value.zoomOut({
    duration: 600,
  })
}

const playAnimation = (document: Document) => {
  const marker = document.getElementById('marker')
  const markerContainer = document.getElementById('marker-container')
  if (marker && markerContainer) {
    marker.style.transform = 'scale(1.15)'
    markerContainer.style.animation = 'markerAnimation 2s infinite'
  }
}

const stopAnimation = (document: Document) => {
  const marker = document.getElementById('marker')
  const markerContainer = document.getElementById('marker-container')
  if (marker && markerContainer) {
    marker.style.transform = 'scale(1)'
    markerContainer.style.transform = 'scale(1) rotate(0deg);'
    markerContainer.style.animation = 'none'
  }
}

onMounted(() => {
  // todo set token in .env
  const config = useRuntimeConfig()
  console.log(config.mapToken)
  const container = document.getElementById('map')
  console.log(container)
  if (container !== null) {
    map.value = new mapboxgl.Map({
      container,
      accessToken: 'pk.eyJ1IjoiYXJ0aHVyZGFuam91IiwiYSI6ImNsNzBubWxqdTBnNHgzb295aXB6bnhnbXYifQ.DOGRAgZv3Uuenpj-jBPHLQ',
      style: 'mapbox://styles/arthurdanjou/cl70o0t2e001t15qa3lutno19',
      center: [2.180586, 48.871748],
      zoom: 13,
      scrollZoom: false,
      doubleClickZoom: false,
      touchZoomRotate: false,
      dragPan: false,
    })
    const card = document.getElementById('card-map')
    card.addEventListener('mouseenter', () => playAnimation(document))
    card.addEventListener('mouseleave', () => stopAnimation(document))
  }
})

onUnmounted(() => {
  const card = document.getElementById('card-map')
  card.removeEventListener('mouseenter', () => playAnimation(document))
  card.removeEventListener('mouseleave', () => stopAnimation(document))
})

const getImage = () => {
  const date = new Date()
  if (date.getHours() > 22 || date.getHours() < 6)
    return MapNight
  else
    return MapDay
}

const isMapReady = computed(() => map.value !== null)
const getZoom = computed(() => map.value.getZoom())
</script>

<template>
  <Card id="card-map">
    <!-- todo fix map on page switch -->
    <div id="map" class="z-2 w-full h-full rounded-28px min-w-px min-h-px" />
    <div v-if="isMapReady" class="z-3 marker flex items-center justify-center ">
      <div id="marker" class="bg-marker w-80px h-80px rounded-full border-4 border-white flex items-center justify-center duration-300">
        <div id="marker-container" class="duration-300 z-3 flex justify-center items-center">
          <img height="64" width="64" :src="getImage()" alt="Photo for the map">
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="isMapReady && getZoom > 3"
        class="z-3 p-2 duration-300 cursor-pointer absolute bottom-4 left-4 border-2 rounded-full border-dark
        bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) hover:(shadow-dark text-black) dark:hover:text-white"
        @click.prevent="zoomOut"
      >
        <div class="flex items-center justify-center flex items-center justify-center">
          <MinusIcon />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="isMapReady && getZoom <= 12"
        class="z-3 p-2 duration-300 cursor-pointer absolute bottom-4 right-4 border-2 rounded-full border-dark
        bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) hover:(shadow-dark text-black) dark:hover:text-white"
        @click.prevent="zoomIn"
      >
        <div class="flex items-center justify-center flex items-center justify-center">
          <PlusIcon />
        </div>
      </div>
    </transition>
  </Card>
</template>

<style lang="scss">
.mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
  display: none;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}

.marker {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.bg-marker {
  background: rgba(152, 208, 255, 0.5) none repeat scroll 0 0;
}

@keyframes markerAnimation {
  0% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(15deg);
  }
  50% {
    transform: scale(1) rotate(0deg);
  }
  75% {
    transform: scale(1.1) rotate(-15deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>
