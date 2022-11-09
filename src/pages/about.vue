<script setup lang="ts">
import { computed, ref, useAsyncData, useElementHover, useHead, useMouseInElement } from '#imports'

const age = ref(19)

useHead({
  title: 'About Me - Arthur Danjou',
})

const about = ref(null)
const isHovered = useElementHover(about)
const { elementX, elementY } = useMouseInElement(about)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))

const { data: views } = await useAsyncData('stats:views', () => $fetch('/api/views'))
const { data: likes } = await useAsyncData('stats:likes', () => $fetch('/api/likes'))
const { data: github } = await useAsyncData('stats:github', () => $fetch('/api/github'))
const { data: hours } = await useAsyncData('stats:hours', () => $fetch('/api/hours'))
</script>

<template>
  <section>
    <PageTitle title="About Me" />
    <CardContainer>
      <ActivityCard />
      <Card order="first" width="2">
        <CardDiv>
          It is me
          <!-- todo insert photo -->
        </CardDiv>
      </Card>
      <Card ref="about" order="first">
        <CardDiv class="flex">
          <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
          <h1 class="z-10 font-bold text-4xl leading-12 text-center">
            Hey, I am
            <span>Arthur Danjou</span> 👋
          </h1>
          <h3 class="z-10 text-sm text-gray-600 dark:text-gray-400 text-center">
            A software engineer from France
          </h3>
        </CardDiv>
      </Card>
      <Card order="first" width="2">
        <CardDiv>
          <h1 class="text-3xl font-bold text-center">
            About me
          </h1>
          <p class="text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify">
            Software Engineer, but also student in <span class="about-word">maths</span>. I live in Paris, France. I am <span class="about-word">{{ age }}</span> years old. I am passionate about <span class="about-word">networking</span>, <span class="about-word">infrastructure</span> and <span class="about-word">cloud computing</span>️. I use modern <span class="about-word">technologies</span> to get the best possible result. I love sharing my <span class="about-word">knowledge</span> and helping others. Sometimes, I write technical <span class="about-word">articles</span> on my blog and I always try to contribute to <span class="about-word">opensource</span> projects.
          </p>
        </CardDiv>
      </Card>
      <Card width="2">
        <CardDiv>
          <h1 class="text-3xl font-bold text-center">
            My Interests
          </h1>
          <div class="grid w-full gap-x-4 gap-y-8 grid-rows-2 md:grid-rows-1 grid-flow-col-dense">
            <div class="interest-item">
              <CardIcon icon="ph:cpu-bold" :size="52" />
              <p class="interests-title">
                Tech.
              </p>
            </div>
            <div class="interest-item">
              <CardIcon icon="uil:server" :size="52" />
              <p class="interests-title">
                DevOps
              </p>
            </div>
            <div class="interest-item">
              <CardIcon icon="ph:airplane-tilt-bold" :size="52" />
              <p class="interests-title">
                Trips
              </p>
            </div>
            <div class="interest-item">
              <CardIcon icon="ph:camera-bold" :size="52" />
              <p class="interests-title">
                Photo
              </p>
            </div>
            <div class="interest-item">
              <CardIcon icon="ic:outline-wb-cloudy" :size="52" />
              <p class="interests-title">
                Cloud
              </p>
            </div>
            <div class="interest-item">
              <CardIcon icon="mdi:function-variant" :size="52" />
              <p class="interests-title">
                Maths.
              </p>
            </div>
          </div>
        </CardDiv>
      </Card>
      <StatsCard>
        <div class="bg-clip-text bg-text-yellow">
          <div class="text-7xl inline -mr-4 font-bold">
            12
          </div>
          <div class="text-4xl inline align-top leading-6 font-bold">
            +
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          Satisfied customers
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-lime">
          <div class="text-7xl inline -mr-2 font-bold">
            7
          </div>
          <div class="text-7xl inline leading-6 font-bold">
            Years
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          Of experience
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-green">
          <div class="text-7xl inline -mr-4 font-bold">
            {{ hours.hours }}
          </div>
          <div class="text-4xl inline align-top leading-6 font-bold">
            +
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          All-time hours coding
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-cyan">
          <div class="text-7xl font-bold">
            100%
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          Passion
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-blue">
          <div class="text-7xl font-bold">
            {{ views._sum.views }}
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          All-time posts views
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-purple">
          <div class="text-7xl font-bold">
            {{ likes._sum.likes }}
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          All-time posts reactions
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-rose">
          <div class="text-7xl font-bold">
            {{ github.followers }}
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          Github followers
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-red">
          <div class="text-7xl font-bold">
            xxx
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          Twitter followers
        </p>
      </StatsCard>
      <ContactCard />
      <TwitterCard />
      <GitHubCard />
      <ResumeCard />
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.interest-item {
  @apply flex flex-col items-center justify-center;
}

.interests-title {
  @apply mt-2 text-sm text-gray-600 dark:text-gray-400 text-center;
}

.about-word {
  @apply text-black dark:text-white font-bold;
}

.bg-text-lime {
  background-image: linear-gradient(120deg, #dce13d, #41b421);
  @apply text-transparent;
}

.bg-text-green {
  background-image: linear-gradient(225deg, #73d760,#2a9dce);
  @apply text-transparent;
}

.bg-text-blue {
  background-image: linear-gradient(135deg, #3bc796, #1273c2);
  @apply text-transparent;
}

.bg-text-cyan {
  background-image: linear-gradient(135deg,#63e3dc, #2d5ca9);
  @apply text-transparent;
}

.bg-text-purple {
  background-image: linear-gradient(225deg,#e374ff,#3d30ea);
  @apply text-transparent;
}

.bg-text-rose {
  background-image: linear-gradient(135deg, #7c4bc7,#b82698);
  @apply text-transparent;
}

.bg-text-yellow {
  background-image: linear-gradient(135deg,#f9f871,#f9b871);
  @apply text-transparent;
}

.bg-text-red {
  background-image: linear-gradient(135deg, #dc5e87, #af2929);
  @apply text-transparent;
}
</style>
