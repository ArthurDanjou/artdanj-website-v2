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
      <Card width="2">
        <CardDiv>
          <SpeakerIcon :class="getTextColor()" />
          <h3 class="subtitle mt-4">
            I’m always open to collaborate on a project or hear about an opportunity!
          </h3>
          <h1 class="title">
            Get in touch ✨
          </h1>
        </CardDiv>
      </Card>
      <GitHubCard />
      <TwitterCard />
      <MailCard />
      <Card>
        <CardDiv>
          <DevIcon :class="getTextColor()" />
          <h1 class="title">
            Development
          </h1>
          <p>
            Hello
          </p>
        </CardDiv>
      </Card>
      <Card>
        <CardDiv>
          <DesignIcon :class="getTextColor()" />
          <h1 class="title">
            Design
          </h1>
          <p>
            Hello
          </p>
        </CardDiv>
      </Card>
      <Card>
        <CardDiv>
          <CommentIcon :class="getTextColor()" />
          <h1 class="title">
            Strategy
          </h1>
          <p>
            Hello
          </p>
        </CardDiv>
      </Card>
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bolder my-4;
}

.subtitle {
  @apply text-sm text-stone-500 dark:text-gray-400 uppercase;
}
</style>
