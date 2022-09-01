<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

useHead({
  title: 'My résumé - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Resume" />
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/3">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 auto-rows-fr">
          <Card>
            <CardDiv>
              <img class="border-2 border-dark rounded-full w-1/3" src="~/assets/images/MeHappy.png" alt="Image of me">
              <h1 class="font-bold text-3xl" :class="getTextColor()">
                Arthur Danjou
              </h1>
              <h3 class="text-lg text-gray-600 dark:text-gray-400">
                Software Engineer
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
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
      <div class="w-full mt-16 lg:(w-2/3 ml-16 mt-0)">
        <ResumeTitle title="About Me" />
        <ResumeSection>
          <p class="text-gray-600 dark:text-gray-400 text-justify leading-6">
            I am Arthur Danjou, a mathematics student at the Faculty of Sciences of Paris-Saclay but also a freelance software engineer. I am very interested in new technologies, development and computing. I am able to quickly learn new technologies to meet the needs of different projects. I am always motivated by a challenge and like to be well organized to produce consistent results. Being able to create software from scratch is a real source of motivation.
            <br><br>
            I love sharing my knowledge and helping others. I do a lot of research and read a lot of technical articles to discover new features. As long as I share my passions, I will continue to do this.
          </p>
        </ResumeSection>
        <ResumeTitle title="Work Experiences" />
        <ResumeSection class="space-y-4">
          <!-- todo use nuxt content to fetch -->
        </ResumeSection>
        <ResumeTitle title="Education" />
        <ResumeSection>
          <!-- todo use nuxt content to fetch -->
        </ResumeSection>
        <ResumeTitle title="Skills" />
        <ResumeSection>
          <Stack title="Languages" content="TypeScript, JavaScript, Python, Java, Rust" />
          <Stack title="FrontEnd" content="VueJs, NuxtJs, WindiCss, Sass, TauriApp, ViteJs" />
          <Stack title="BackEnd" content="AdonisJs, MariaDB, Redis, RabbitMQ" />
          <Stack title="DevOps" content="Git, Docker, CI/CD, Traefik, Kubernetes" />
        </ResumeSection>
        <ResumeTitle title="Languages" />
        <ResumeSection>
          <strong>French</strong> (Native Speaker), <strong>English</strong> (Fluent)
        </ResumeSection>
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
