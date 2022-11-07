<script setup lang="ts">
import { computed, ref, useElementHover, useHead, useMouseInElement } from '#imports'

useHead({
  title: 'Contact Me - Arthur Danjou',
})

// todo complete cards
const mail = ref(null)
const isHovered = useElementHover(mail)
const { elementX, elementY } = useMouseInElement(mail)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <PageTitle title="Contact me" />
    <CardContainer>
      <Card ref="mail">
        <CardDiv>
          <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
          <CardIcon icon="material-symbols:inbox-outline" />
          <div class="z-10 absolute left-[37%] top-[10%] mouse-gradient h-[75px] w-[75px]" />
          <div class="z-10">
            <h1 class="title">
              Get in touch
            </h1>
            <h3 class="subtitle mt-2">
              I’m always open to collaborate on a project or hear about an opportunity!
            </h3>
          </div>
        </CardDiv>
      </Card>
      <FormCard />
      <GitHubCard order="normal" />
      <Card order="last">
        <CardDiv>
          <CardIcon icon="uil:web-grid" />
          <div>
            <h1 class="title">
              Development
            </h1>
            <p class="subtitle">
              ...
            </p>
          </div>
        </CardDiv>
      </Card>
      <TwitterCard order="normal" />
      <Card order="last">
        <CardDiv>
          <CardIcon icon="ic:outline-design-services" />
          <div>
            <h1 class="title">
              Design
            </h1>
            <p class="subtitle">
              ...
            </p>
          </div>
        </CardDiv>
      </Card>
      <Card order="last">
        <CardDiv>
          <CardIcon icon="uil:comment" />
          <div>
            <h1 class="title">
              Strategy
            </h1>
            <p class="subtitle">
              ...HEYHDHASJ
            </p>
          </div>
        </CardDiv>
      </Card>
      <MailCard />
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold text-center;
}

.subtitle {
  @apply mt-2 text-lg leading-5 text-gray-600 dark:text-gray-400 text-center;
}
</style>
