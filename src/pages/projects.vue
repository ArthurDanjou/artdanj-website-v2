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
        <CardLink href="https://github.com/ArthurDanjou?tab=repositories" target="_blank">
          <CardIcon>
            <Icon name="ph:lightbulb-bold" size="42px" />
          </CardIcon>
          <div>
            <h1 class="font-bold text-4xl my-4 leading-12">
              What I have done
            </h1>
            <h3 class="my-4 text-sm text-gray-600 dark:text-gray-400">
              See more projects on <Link href="https://github.com/ArthurDanjou?tab=repositories" target="_blank" :group="true">GitHub</Link>
            </h3>
          </div>
          <CardButton />
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
            <h3 class="text-sm text-gray-600 dark:text-gray-400 text-justify">
              {{ project.description }}
            </h3>
            <div class="flex space-x-2 mt-2">
              <SkillTag v-for="skill in project.skills" :key="skill" :skill="skill.name" />
            </div>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
