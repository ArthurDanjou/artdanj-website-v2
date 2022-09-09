<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

const { t } = useI18n()

useHead({
  title: t('head.resume'),
})
</script>

<template>
  <section>
    <PageTitle title="resume" />
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/4">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 auto-rows-fr">
          <Card>
            <CardDiv>
              <img class="mb-4 w-1/2" src="~/assets/images/inch.png" alt="Image of me">
              <h1 class="font-bold text-3xl">
                Arthur Danjou
              </h1>
              <h3 class="text-xl" :class="getTextColor()">
                {{ t('resume.job') }}
              </h3>
              <p class="text-md text-gray-600 dark:text-gray-400">
                Paris, France
              </p>
            </CardDiv>
          </Card>
          <Card>
            <CardDiv>
              Socials
            </CardDiv>
          </Card>
        </div>
      </div>
      <div class="w-full mt-16 lg:(w-3/4 ml-16 mt-0)">
        <ResumeTitle title="resume.titles.about" />
        <ResumeSection>
          <p class="text-gray-600 dark:text-gray-400 text-justify leading-6">
            {{ t('resume.about.first') }}
            <br><br>
            {{ t('resume.about.second') }}
          </p>
        </ResumeSection>
        <ResumeTitle title="resume.titles.work" />
        <ResumeSection class="space-y-4">
          <!-- todo use nuxt content to fetch and use TagComment -->
        </ResumeSection>
        <ResumeTitle title="resume.titles.education" />
        <ResumeSection>
          <!-- todo use nuxt content to fetch -->
        </ResumeSection>
        <ResumeTitle title="resume.titles.skills" />
        <ResumeSection>
          <Stack :title="t('resume.skills')" content="TypeScript, JavaScript, Python, Java, Rust" />
          <Stack title="FrontEnd" content="VueJs, NuxtJs, WindiCss, Sass, TauriApp, ViteJs" />
          <Stack title="BackEnd" content="AdonisJs, MariaDB, Redis, RabbitMQ" />
          <Stack title="DevOps" content="Git, Docker, CI/CD, Traefik, Kubernetes" />
        </ResumeSection>
        <ResumeTitle title="resume.titles.languages" />
        <i18n-t keypath="resume.languages.text" tag="div" class="p-6 text-gray-600 dark:text-gray-400">
          <template #french>
            <strong class="text-black dark:text-white">{{ t('resume.languages.french') }}</strong>
          </template>
          <template #native>
            {{ t('resume.languages.native') }}
          </template>
          <template #english>
            <strong class="text-black dark:text-white">{{ t('resume.languages.english') }}</strong>
          </template>
          <template #fluent>
            {{ t('resume.languages.fluent') }}
          </template>
        </i18n-t>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold my-4;
}

.subtitle {
  @apply text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify;
}
</style>
