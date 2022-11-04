<script setup lang="ts">
import {
  computed,
  ref,
  useEducations,
  useElementHover,
  useHead, useMouseInElement,
  useSkills,
  useWorkExperiences,
} from '#imports'

const { data: educations } = await useEducations()
const { data: experiences } = await useWorkExperiences()
const { data: skills } = await useSkills()

useHead({
  title: 'My Résumé - Arthur Danjou',
})

const resume = ref(null)
const isHovered = useElementHover(resume)
const { elementX, elementY } = useMouseInElement(resume)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <PageTitle title="My Résumé" />
    <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-16">
      <div class="w-full lg:w-1/4">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
          <Card ref="resume">
            <CardDiv class="flex flex-col items-center">
              <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
              <img class="z-11 mb-4 w-1/2" src="~/assets/images/inch.png" alt="Image of me">
              <div class="z-10 absolute left-[37%] top-[15%] mouse-gradient h-[75px] w-[75px]" />
              <div class="flex flex-col items-center">
                <h1 class="z-10 font-bold text-3xl">
                  Arthur Danjou
                </h1>
                <h3 class="z-10 text-xl">
                  Software Engineer
                </h3>
                <p class="z-10 text-md text-gray-600 dark:text-gray-400">
                  Paris, France
                </p>
              </div>
            </CardDiv>
          </Card>
          <Card>
            <CardDiv>
              <div class="flex md:flex-col lg:flex-row justify-between md:space-y-8 lg:space-y-0">
                <NuxtLink class="social-div" target="_blank" to="https://instagram.com/arthur.dnj">
                  <Icon name="mdi:instagram" size="24px" />
                  <p class="hidden md:block lg:hidden">
                    Instagram
                  </p>
                </NuxtLink>
                <NuxtLink class="social-div" target="_blank" to="https://github.com/arthurdanjou">
                  <Icon name="mdi:github" size="24px" />
                  <p class="hidden md:block lg:hidden">
                    GitHub
                  </p>
                </NuxtLink>
                <NuxtLink class="social-div" target="_blank" to="https://twitter.com/arthurdanj">
                  <Icon name="mdi:twitter" size="24px" />
                  <p class="hidden md:block lg:hidden">
                    Twitter
                  </p>
                </NuxtLink>
                <NuxtLink class="social-div" target="_blank" to="https://www.linkedin.com/in/arthurdanjou/">
                  <Icon name="mdi:linkedin" size="24px" />
                  <p class="hidden md:block lg:hidden">
                    LinkedIn
                  </p>
                </NuxtLink>
                <NuxtLink class="social-div" target="_blank" to="mailto:contact@arthurdanjou.fr">
                  <Icon name="ic:baseline-alternate-email" size="24px" />
                  <p class="hidden md:block lg:hidden">
                    Mail
                  </p>
                </NuxtLink>
              </div>
            </CardDiv>
          </Card>
        </div>
      </div>
      <div class="w-full mt-16 lg:(w-3/4 mt-0)">
        <ResumeTitle title="About Me" />
        <ResumeSection>
          <p class="text-gray-600 dark:text-gray-400 text-justify leading-6">
            I am Arthur Danjou, a mathematics student at the Faculty of Sciences of Paris-Saclay but also a freelance software engineer. I am very interested in new technologies, development and computing. I am able to quickly learn new technologies to meet the needs of different projects. I am always motivated by a challenge and like to be well organized to produce consistent results. Being able to create software from scratch is a real source of motivation.
            I love sharing my knowledge and helping others. I do a lot of research and read a lot of technical articles to discover new features. As long as I share my passions, I will continue to do this.
          </p>
        </ResumeSection>
        <ResumeTitle title="Work Experiences" />
        <ResumeSection class="space-y-4">
          <WorkExperience
            v-for="experience in experiences"
            :key="experience.id"
            :experience="experience"
          />
        </ResumeSection>
        <ResumeTitle title="Educations" />
        <ResumeSection class="space-y-4">
          <Education
            v-for="education in educations"
            :key="education.id"
            :education="education"
          />
        </ResumeSection>
        <ResumeTitle title="Skills" />
        <ResumeSection>
          <Stack
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
          />
        </ResumeSection>
        <ResumeTitle title="Languages" />
        <ResumeSection class="text-gray-600 dark:text-gray-400">
          <strong class="text-black dark:text-white">French</strong> (Native Speaker), <strong class="text-black dark:text-white">English</strong> (Fluent)
        </ResumeSection>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.social-div {
  @apply flex space-x-4 p-2 hover:(bg-gray-100 dark:bg-dark-800) duration-300 rounded-12px;

  svg {
    // center icon
    @apply self-center;
  }
}

.title {
  @apply text-3xl font-bold my-4;
}

.subtitle {
  @apply text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify;
}
</style>
