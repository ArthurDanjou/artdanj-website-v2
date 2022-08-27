<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getTextColor } = useTheme()

const age = ref(19)

useHead({
  title: 'About me - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="About Me" />
    <CardContainer>
      <Card width="3">
        <CardDiv>
          It is me
          <!-- todo insert photo -->
        </CardDiv>
      </Card>
      <Card>
        <CardDiv class="flex">
          <h1 class="font-bold text-4xl my-4 leading-12">
            Hey, I am
            <span :class="getTextColor()">Arthur</span> 👋
          </h1>
          <h3 class="my-4 text-sm text-stone-500 dark:text-gray-400 uppercase">
            A software engineer from France 🇫🇷
          </h3>
        </CardDiv>
      </Card>
      <Card width="2">
        <CardDiv>
          <h1 class="text-3xl font-bold mb-4">
            About me
          </h1>
          <h3 class="text-lg leading-5 text-stone-500 dark:text-gray-400 text-justify">
            Software Engineer, but also student in <span :class="getTextColor()">Mathematics</span> 🎓. I live in Paris, France 🇫🇷. I am <span :class="getTextColor()">{{ age }}</span> years old.
            I am passionate about <span :class="getTextColor()">networking</span>, <span :class="getTextColor()">infrastructure</span> and <span :class="getTextColor()">cloud computing</span> ☁️. I use modern <span :class="getTextColor()">technologies</span> to get the best possible result ✨.
            I love sharing my <span :class="getTextColor()">knowledge</span> and helping others. Sometimes, I write technical <span :class="getTextColor()">articles</span> on my blog and I always try to contribute to <span :class="getTextColor()">open-source</span> projects 👑.
          </h3>
        </CardDiv>
      </Card>
      <Card width="2">
        <CardDiv>
          <h1 class="text-3xl font-bold mb-12">
            Interests
          </h1>
          <div class="flex w-full justify-between space-x-8">
            <div class="interest-item">
              <CPUIcon :class="getTextColor()" />
              <p class="interests-title">
                Technologies
              </p>
            </div>
            <div class="interest-item">
              <ServerIcon :class="getTextColor()" />
              <p class="interests-title">
                DevOps
              </p>
            </div>
            <div class="interest-item">
              <PlaneIcon :class="getTextColor()" />
              <p class="interests-title">
                Trips
              </p>
            </div>
            <div class="interest-item">
              <CameraIcon :class="getTextColor()" />
              <p class="interests-title">
                Photo
              </p>
            </div>
            <div class="interest-item">
              <CloudIcon :class="getTextColor()" />
              <p class="interests-title">
                Cloud computing
              </p>
            </div>
            <div class="interest-item">
              <FunctionIcon :class="getTextColor()" />
              <p class="interests-title">
                Mathematics
              </p>
            </div>
          </div>
        </CardDiv>
      </Card>
      <Card>
        <CardDiv class="flex items-center justify-center">
          <div class="flex">
            <div class="bg-clip-text bg-text-green">
              <div class="text-7xl inline -mr-2 font-bold">
                12
              </div>
              <div class="text-4xl inline align-top leading-6">
                +
              </div>
            </div>
          </div>
          <p class="text-md text-stone-500 dark:text-gray-400 uppercase">
            Clients satisfaits
          </p>
        </CardDiv>
      </Card>
      <Card>
        <CardDiv class="flex items-center justify-center">
          <div class="flex">
            <div class="bg-clip-text bg-text-blue">
              <div class="text-7xl inline -mr-2 font-bold">
                7
              </div>
              <div class="text-7xl inline leading-6">
                Ans
              </div>
            </div>
          </div>
          <p class="text-md text-stone-500 dark:text-gray-400 uppercase">
            D'expérience
          </p>
        </CardDiv>
      </Card>
      <Card>
        <CardDiv class="flex items-center justify-center">
          <div class="flex">
            <div class="bg-clip-text bg-text-purple">
              <div class="text-7xl inline -mr-2 font-bold">
                500
              </div>
              <div class="text-4xl inline align-top leading-6">
                +
              </div>
            </div>
          </div>
          <p class="text-md text-stone-500 dark:text-gray-400 uppercase">
            Heures de pratique par an
          </p>
        </CardDiv>
      </Card>
      <Card>
        <CardDiv class="flex items-center justify-center">
          <div class="flex">
            <div class="bg-clip-text bg-text-rose">
              <div class="text-7xl font-bold">
                100%
              </div>
            </div>
          </div>
          <p class="text-md text-stone-500 dark:text-gray-400 uppercase">
            Passion
          </p>
        </CardDiv>
      </Card>
      <ContactCard />
      <TwitterCard />
      <GitHubCard />
      <ResumeCard />
    </CardContainer>
  </section>
</template>

<style lang="scss">
.interest-item {
  @apply flex flex-col items-center;
}

.interests-title {
  @apply mt-4 text-sm text-stone-500 dark:text-gray-400 text-center uppercase;
}

.bg-text-green {
  background-image: linear-gradient(225deg,#5af141,#2a9dce);
  @apply text-transparent;
}

.bg-text-blue {
  background-image: linear-gradient(135deg,#63e3dc,#1254c2);
  @apply text-transparent;
}

.bg-text-purple {
  background-image: linear-gradient(225deg,#e374ff,#3d30ea);
  @apply text-transparent;
}

.bg-text-rose {
  background-image: linear-gradient(135deg,#ffb077,#b82698);
  @apply text-transparent;
}
</style>
