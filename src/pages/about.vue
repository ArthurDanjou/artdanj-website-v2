<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const age = ref(19)
const { t } = useI18n()

useHead({
  title: t('head.about'),
})
</script>

<template>
  <section>
    <PageTitle title="about" />
    <CardContainer>
      <Card order="first" width="3">
        <CardDiv>
          It is me
          <!-- todo insert photo -->
        </CardDiv>
      </Card>
      <Card order="first">
        <CardDiv class="flex">
          <h1 class="font-bold text-4xl my-4 leading-12">
            {{ t('about.main') }}
            <span>Arthur Danjou</span> 👋
          </h1>
          <h3 class="my-4 text-sm text-gray-600 dark:text-gray-400">
            {{ t('about.description') }}
          </h3>
        </CardDiv>
      </Card>
      <Card order="first" width="2">
        <CardDiv>
          <h1 class="text-3xl font-bold mb-4">
            {{ t('about.about.title') }}
          </h1>
          <i18n-t keypath="about.about.description.text" tag="p" class="text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify">
            <template #maths>
              <span>{{ t('about.about.description.maths') }}</span>
            </template>
            <template #age>
              <span>{{ age }}</span>
            </template>
            <template #networking>
              <span>{{ t('about.about.description.networking') }}</span>
            </template>
            <template #infrastructure>
              <span>{{ t('about.about.description.infrastructure') }}</span>
            </template>
            <template #cloud>
              <span>{{ t('about.about.description.cloud') }}</span>
            </template>
            <template #technologies>
              <span>{{ t('about.about.description.technologies') }}</span>
            </template>
            <template #knowledge>
              <span>{{ t('about.about.description.knowledge') }}</span>
            </template>
            <template #opensource>
              <span>{{ t('about.about.description.opensource') }}</span>
            </template>
          </i18n-t>
        </CardDiv>
      </Card>
      <Card width="2">
        <CardDiv>
          <h1 class="text-3xl font-bold mb-12">
            {{ t('about.interests.title') }}
          </h1>
          <div class="grid w-full gap-x-4 gap-y-8 grid-rows-2 md:grid-rows-1 grid-flow-col-dense">
            <div class="interest-item">
              <CardIcon :stick="true">
                <Icon name="ph:cpu-bold" size="40px" />
              </CardIcon>
              <p class="interests-title">
                Tech.
              </p>
            </div>
            <div class="interest-item">
              <CardIcon :stick="true">
                <Icon name="uil:server" size="42px" />
              </CardIcon>
              <p class="interests-title">
                DevOps
              </p>
            </div>
            <div class="interest-item">
              <CardIcon :stick="true">
                <Icon name="ph:airplane-tilt-bold" size="42px" />
              </CardIcon>
              <p class="interests-title">
                {{ t('about.interests.trips') }}
              </p>
            </div>
            <div class="interest-item">
              <CardIcon :stick="true">
                <Icon name="ph:camera-bold" size="42px" />
              </CardIcon>
              <p class="interests-title">
                Photo
              </p>
            </div>
            <div class="interest-item">
              <CardIcon :stick="true">
                <Icon name="ic:outline-wb-cloudy" size="42px" />
              </CardIcon>
              <p class="interests-title">
                Cloud
              </p>
            </div>
            <div class="interest-item">
              <CardIcon :stick="true">
                <Icon name="mdi:function-variant" size="42px" />
              </CardIcon>
              <p class="interests-title">
                Maths.
              </p>
            </div>
          </div>
        </CardDiv>
      </Card>
      <StatsCard>
        <div class="bg-clip-text bg-text-green">
          <div class="text-7xl inline -mr-4 font-bold">
            12
          </div>
          <div class="text-4xl inline align-top leading-6 font-bold">
            +
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          {{ t('about.stats.customers') }}
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-blue">
          <div class="text-7xl inline -mr-2 font-bold">
            7
          </div>
          <div class="text-7xl inline leading-6 font-bold">
            {{ t('about.stats.years') }}
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          {{ t('about.stats.experience') }}
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-purple">
          <div class="text-7xl inline -mr-4 font-bold">
            500
          </div>
          <div class="text-4xl inline align-top leading-6 font-bold">
            +
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          {{ t('about.stats.hours') }}
        </p>
      </StatsCard>
      <StatsCard>
        <div class="bg-clip-text bg-text-rose">
          <div class="text-7xl font-bold">
            100%
          </div>
        </div>
        <p class="text-md text-gray-600 dark:text-gray-400">
          Passion
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
