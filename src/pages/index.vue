<script setup lang="ts">
import { computed, ref, useElementHover, useHead, useLatestPost, useLatestProject, useMouseInElement } from '#imports'

const { data: post } = await useLatestPost()
const { data: project } = await useLatestProject()

useHead({
  title: 'Arthur Danjou - Software Engineer',
})

const main = ref(null)
const isHovered = useElementHover(main)
const { elementX, elementY } = useMouseInElement(main)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <CardContainer>
      <Card ref="main" order="first" width="2" height="2">
        <CardLink href="about">
          <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
          <div class="h-full flex items-center justify-center my-12 relative">
            <img src="~/assets/images/hand.png" alt="Hand" class="z-11 bg-white dark:bg-dark-900 border-dark border-2 h-40 w-40 rounded-1/2">
            <div class="z-10 absolute photo-gradient h-[175px] w-[175px]" />
          </div>
          <div class="z-10 flex flex flex-col space-y-4 text-center">
            <div class="mb-16">
              <h3 class="text-gray-600 dark:text-gray-400 text-3xl">
                Hey, I am
              </h3>
              <h1 class="font-bold text-6xl">
                Arthur Danjou
              </h1>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              A software engineer passionate about networking, infrastructure and cloud but also a student living in France.
            </p>
          </div>
        </CardLink>
      </Card>
      <AnnounceCard />
      <ResumeCard />
      <Card order="last">
        <CardLink href="uses" class="flex flex-col justify-center">
          <CardIcon icon="lucide:lamp-desk" />
          <div class="flex flex-col space-y-4 text-center">
            <h1 class="title">
              How do I work ?
            </h1>
            <h3 class="subtitle">
              Discover my development environment
            </h3>
          </div>
        </CardLink>
      </Card>
      <Card order="last">
        <CardLink href="guestbook" class="flex flex-col justify-center">
          <CardIcon icon="icon-park-outline:bookshelf" />
          <div class="flex flex-col space-y-4 text-center">
            <h1 class="title">
              Sign my book
            </h1>
            <h3 class="subtitle">
              Do you want to leave a message ?
            </h3>
          </div>
        </CardLink>
      </Card>
      <ContactCard />
      <SpotifyCard />
      <TwitterCard />
      <GitHubCard />
      <InstagramCard />
      <ProjectCard :project="project[0]" />
      <Card width="2">
        <CardLink href="/projects">
          <div class="flex w-full justify-between">
            <div class="flex flex-col items-center text-center">
              <CardIcon icon="uil:web-grid" />
              <p class="subtitle mt-2">
                Development
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CardIcon icon="ic:outline-design-services" />
              <p class="subtitle mt-2">
                Design
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CardIcon icon="uil:comment" />
              <p class="subtitle mt-2">
                Strategy
              </p>
            </div>
          </div>
          <h1 class="title !mb-0 text-center">
            What I do
          </h1>
        </CardLink>
      </Card>
      <BlogCard width="2" :post="post[0]" />
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply mt-4 text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.photo-gradient {
  background: repeating-linear-gradient(to right, #0047E1 0%, #6d34fe 50%, #ac00dc 100%);
  filter: blur(100px);
  opacity: 0.7;
}
</style>
