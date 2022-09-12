<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'
import { useEducations, useSkills, useWorkExperiences } from '~/composables/useContent'

const { getTextColor } = useTheme()

const { data: educations } = await useEducations()
const { data: experiences } = await useWorkExperiences()
const { data: skills } = await useSkills()

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
        <ResumeTitle title="resume.titles.experiences" />
        <ResumeSection class="space-y-4">
          <!-- todo use nuxt content to fetch and use TagComment -->
          <WorkExperience
            v-for="experience in experiences.body"
            :key="experience.id"
            :experience="experience"
          />
        </ResumeSection>
        <ResumeTitle title="resume.titles.educations" />
        <ResumeSection class="space-y-4">
          <Education
            v-for="education in educations.body"
            :key="education.id"
            :education="education"
          />
        </ResumeSection>
        <ResumeTitle title="resume.titles.skills" />
        <ResumeSection>
          <Stack
            v-for="skill in skills.body"
            :key="skill.id"
            :skill="skill"
          />
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
