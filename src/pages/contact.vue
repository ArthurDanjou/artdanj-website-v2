<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

useHead({
  title: 'Contact me - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="Contact Me" />
    <CardContainer>
      <Card>
        <CardDiv>
          <SpeakerIcon :class="getTextColor()" />
          <h1 class="title">
            Get in touch ✨
          </h1>
          <h3 class="subtitle mt-4 ">
            I’m always open to collaborate on a project or hear about an opportunity!
          </h3>
        </CardDiv>
      </Card>
      <FormCard />
      <GitHubCard />
      <Card :order="1">
        <CardDiv>
          <DevIcon :class="getTextColor()" />
          <h1 class="title">
            Development
          </h1>
          <p class="subtitle">
            Hello
          </p>
        </CardDiv>
      </Card>
      <TwitterCard />
      <Card :order="1">
        <CardDiv>
          <DesignIcon :class="getTextColor()" />
          <h1 class="title">
            Design
          </h1>
          <p class="subtitle">
            Hello
          </p>
        </CardDiv>
      </Card>
      <Card :order="1">
        <CardDiv>
          <CommentIcon :class="getTextColor()" />
          <h1 class="title">
            Strategy
          </h1>
          <p class="subtitle">
            Hello
          </p>
        </CardDiv>
      </Card>
      <MailCard />
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bolder my-4;
}

.subtitle {
  @apply text-lg leading-5 text-stone-500 dark:text-gray-400 text-justify;
}
</style>
