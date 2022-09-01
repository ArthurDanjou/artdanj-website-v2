<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

useHead({
  title: 'My résumé - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Resume" />
    <CardContainer>
      <Card>
        <CardDiv>
          <h1 class="font-bold text-3xl" :class="getTextColor()">
            Arthur Danjou
          </h1>
          <h3 class="text-lg text-gray-600 dark:text-gray-400">
            Software Engineer
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Paris, France
          </p>
          <ul />
        </CardDiv>
      </Card>
      <Card width="2">
        <CardDiv>
          <p class="text-gray-600 dark:text-gray-400 text-justify">
            I am Arthur Danjou, a mathematics student at the Faculty of Sciences of Paris-Saclay but also a freelance software engineer. I am very interested in new technologies, development and computing. I am able to quickly learn new technologies to meet the needs of different projects. I am always motivated by a challenge and like to be well organized to produce consistent results. Being able to create software from scratch is a real source of motivation.

            I love sharing my knowledge and helping others. I do a lot of research and read a lot of technical articles to discover new features. As long as I share my passions, I will continue to do this.
          </p>
        </CardDiv>
      </Card>
      <Card>
        Work Experiences
      </Card>
      <Card>
        Education
      </Card>
      <Card>
        Stack
      </Card>
      <Card>
        Languages
      </Card>
      <Card>
        Interests -> About
      </Card>
      <Card>
        Projects -> Projects
      </Card>
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold my-4;
}

.subtitle {
  @apply text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify;
}
</style>
