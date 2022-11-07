<script setup lang="ts">
import { computed, ref, useElementHover, useHead, useMouseInElement, useProjects } from '#imports'

const { data: projects } = await useProjects()

useHead({
  title: 'All Works - Arthur Danjou',
})

const projectCard = ref(null)
const isHovered = useElementHover(projectCard)
const { elementX, elementY } = useMouseInElement(projectCard)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <PageTitle title="All Works" />
    <CardContainer>
      <Card ref="projectCard" width="2">
        <CardLink href="https://github.com/ArthurDanjou?tab=repositories" target="_blank">
          <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
          <CardIcon icon="ph:lightbulb-bold" />
          <div class="z-10 absolute left-[45%] top-[15%] mouse-gradient h-[75px] w-[75px]" />
          <div class="z-10">
            <h1 class="font-bold my-2 text-4xl leading-12 text-center">
              What I have done
            </h1>
            <h3 class="text-sm flex space-x-1 justify-center">
              <span class="text-gray-600 dark:text-gray-400">
                See more projects on
              </span>
              <ALink href="https://github.com/ArthurDanjou?tab=repositories" target="_blank" :group="true">
                GitHub
              </ALink>
            </h3>
          </div>
        </CardLink>
      </Card>
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </CardContainer>
  </section>
</template>
