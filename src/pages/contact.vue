<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Contact Me - Arthur Danjou',
})

// todo complete cards
</script>

<template>
  <section>
    <PageTitle title="Contact me" />
    <CardContainer>
      <Card>
        <CardDiv>
          <CardIcon>
            <Icon name="material-symbols:inbox-outline" size="42px" />
          </CardIcon>
          <h1 class="title">
            Get in touch
          </h1>
          <h3 class="subtitle mt-4 ">
            I’m always open to collaborate on a project or hear about an opportunity!
          </h3>
        </CardDiv>
      </Card>
      <FormCard />
      <GitHubCard order="normal" />
      <Card order="last">
        <CardDiv>
          <CardIcon>
            <Icon name="uil:web-grid" size="42px" />
          </CardIcon>
          <h1 class="title">
            Development
          </h1>
          <p class="subtitle">
            ...
          </p>
        </CardDiv>
      </Card>
      <TwitterCard order="normal" />
      <Card order="last">
        <CardDiv>
          <CardIcon>
            <Icon name="ic:outline-design-services" size="42px" />
          </CardIcon>
          <h1 class="title">
            Design
          </h1>
          <p class="subtitle">
            ...
          </p>
        </CardDiv>
      </Card>
      <Card order="last">
        <CardDiv>
          <CardIcon>
            <Icon name="uil:comment" size="42px" />
          </CardIcon>
          <h1 class="title">
            Strategy
          </h1>
          <p class="subtitle">
            ...
          </p>
        </CardDiv>
      </Card>
      <MailCard />
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold;
}

.subtitle {
  @apply text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify;
}
</style>
