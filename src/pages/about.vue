<script setup lang="ts">
import { getThemeTextColor } from '~/types/themes'
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()
const getColor = () => {
  return getThemeTextColor(themeStore.theme)
}
</script>

<template>
  <section>
    <PageTitle title="About Me" />
    <CardContainer>
      <Card width="3">
        <CardDiv>
          C'est moi
        </CardDiv>
      </Card>
      <Card>
        <CardDiv class="flex">
          <h1 class="font-bold text-4xl my-4 leading-12">
            Hey, I am
            <span :class="getColor()">Arthur</span> 👋
          </h1>
          <h3 class="my-4 text-sm text-stone-500 dark:text-gray-400 uppercase">
            A software engineer from France 🇫🇷
          </h3>
        </CardDiv>
      </Card>
      <Card width="2">
        About me
      </Card>
      <Card width="2">
        Interests
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
                400
              </div>
              <div class="text-4xl inline align-top leading-6">
                +
              </div>
            </div>
          </div>
          <p class="text-md text-stone-500 dark:text-gray-400 uppercase">
            Heures de pratique
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
