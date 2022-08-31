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
          Arthur Danjou
          Software Engineer
          Paris, France
          Socials
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
  @apply text-lg leading-5 text-stone-500 dark:text-gray-400 text-justify;
}
</style>
