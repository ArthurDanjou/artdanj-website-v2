<script setup lang="ts">
import { computed, ref, useElementHover, useHead, useMouseInElement } from '#imports'

useHead({
  title: 'Discover new talents - Arthur Danjou',
})

const talents = await $fetch('/api/talents/talents')

const talentEl = ref(null)
const isHovered = useElementHover(talentEl)
const { elementX, elementY } = useMouseInElement(talentEl)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <PageTitle title="Talents" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 grid-flow-row-dense auto-rows-fr">
      <Card ref="talentEl" width="2" height="2">
        <CardDiv>
          <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
          <CardIcon icon="ph:crown-simple-bold" />
          <div class="z-10 absolute left-[45%] top-[10%] mouse-gradient h-[75px] w-[75px]" />
          <div class="z-10">
            <h1 class="font-bold my-2 text-4xl leading-12 text-center">
              The talents of the web
            </h1>
            <h3 class="text-sm text-gray-600 dark:text-gray-400 text-center">
              Discover the talents of incredible people on the web I keep an eye on.
            </h3>
          </div>
        </CardDiv>
      </Card>
      <TalentCard v-for="talent in talents" :key="talent.name" :talent="talent" />
    </div>
  </section>
</template>
