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
          <h3 class="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400">
            Software Engineer
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Paris, France
          </p>
          <ul />
        </CardDiv>
      </Card>
      <Card>
        <CardDiv>
          About me
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
