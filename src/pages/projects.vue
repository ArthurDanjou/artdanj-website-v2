<script setup lang="ts">
import {useHead, useProjects} from '#imports'

const { data: projects } = await useProjects()

useHead({
  title: 'All Works - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Works" />
    <CardContainer>
      <Card>
        Projects -> Github
      </Card>
      <Card v-for="project in projects.body" :key="project">
        <CardLink :href="project.link" target="_blank">
          <CardIcon>
            <Icon :name="project.icon" size="42px" />
          </CardIcon>
          <div>
            <h1 class="text-3xl font-bold">
              {{ project.name }}
            </h1>
            <div class="flex space-x-2 my-4">
              <div v-for="tag in project.tags" :key="tag" class="translate-y-px inline-block flex-none rounded bg-zinc-200 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                {{ tag }}
              </div>
            </div>
            <h3 class="text-sm text-gray-600 dark:text-gray-400 text-justify">
              {{ project.description }}
            </h3>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
