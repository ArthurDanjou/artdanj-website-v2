<script setup lang="ts">
import {computed, ref, useElementHover, useHead, useParallax, useProjects} from '#imports'

const { data: projects } = await useProjects()

useHead({
  title: 'All Works - Arthur Danjou',
})

const main = ref(null)
const { tilt, roll } = useParallax(main)
const isHovered = useElementHover(main)
const cardStyle = computed(() => ({
  transform: `rotateX(${isHovered.value ? roll.value * 45 : 0}deg) rotateY(${isHovered.value ? tilt.value * 25 : 0}deg)`,
}))
</script>

<template>
  <section>
    <PageTitle title="All Works" />
    <CardContainer>
      <Card ref="main" :style="cardStyle">
        <CardLink href="https://github.com/ArthurDanjou?tab=repositories" target="_blank">
          <CardIcon>
            <Icon name="ph:lightbulb-bold" size="42px" />
          </CardIcon>
          <div>
            <h1 class="font-bold text-4xl my-4 leading-12">
              What I have done
            </h1>
            <h3 class="my-4 text-sm flex space-x-1">
              <span class="text-gray-600 dark:text-gray-400">
                See more projects on
              </span>
              <Link href="https://github.com/ArthurDanjou?tab=repositories" target="_blank" :group="true">
                GitHub
              </Link>
            </h3>
          </div>
        </CardLink>
      </Card>
      <Card v-for="project in projects.body" :key="project">
        <CardLink :href="project.link" target="_blank">
          <CardIcon>
            <Icon :name="project.icon" size="42px" />
          </CardIcon>
          <div>
            <div class="flex space-x-2 my-2">
              <Tag v-for="tag in project.tags" :key="tag">
                {{ tag }}
              </Tag>
            </div>
            <h1 class="text-3xl font-bold">
              {{ project.name }}
            </h1>
            <h3 class="text-sm text-gray-500 dark:text-gray-300 text-justify">
              {{ project.description }}
            </h3>
            <p class="flex space-x-2 mt-2 text-xs text-gray-600 dark:text-gray-400">
              Made with {{ project.skills.map(skill => skill.name).join(', ') }}
            </p>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
