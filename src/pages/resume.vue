<script setup lang="ts">
import { useEducations, useHead, useSkills, useWorkExperiences } from '#imports'

const { data: educations } = await useEducations()
const { data: experiences } = await useWorkExperiences()
const { data: skills } = await useSkills()

useHead({
  title: 'My Résumé - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Résumé" />
    <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-16">
      <div class="w-full lg:w-1/4">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 auto-rows-fr">
          <Card>
            <CardDiv>
              <img class="mb-4 w-1/2" src="~/assets/images/inch.png" alt="Image of me">
              <h1 class="font-bold text-3xl">
                Arthur Danjou
              </h1>
              <h3 class="text-xl">
                Software Engineer
              </h3>
              <p class="text-md text-gray-600 dark:text-gray-400">
                Paris, France
              </p>
            </CardDiv>
          </Card>
          <Card>
            <CardDiv class="p-8">
              <NuxtLink class="group" target="_blank" to="https://instagram.com/arthur.dnj">
                <div class="social-div">
                  <div class="social-item">
                    <Icon name="mdi:instagram" size="24px" />
                    <p>Instagram</p>
                  </div>
                  <Icon class="social-arrow" name="material-symbols:arrow-circle-right-outline-rounded" size="24px" />
                </div>
              </NuxtLink>
              <div class="divider" />
              <NuxtLink class="group" target="_blank" to="https://github.com/arthurdanjou">
                <div class="social-div">
                  <div class="social-item">
                    <Icon name="mdi:github" size="24px" />
                    <p>GitHub</p>
                  </div>
                  <Icon class="social-arrow" name="material-symbols:arrow-circle-right-outline-rounded" size="24px" />
                </div>
              </NuxtLink>
              <div class="divider" />
              <NuxtLink class="group" target="_blank" to="https://twitter.com/arthurdanj">
                <div class="social-div">
                  <div class="social-item">
                    <Icon name="mdi:twitter" size="24px" />
                    <p>Twitter</p>
                  </div>
                  <Icon class="social-arrow" name="material-symbols:arrow-circle-right-outline-rounded" size="24px" />
                </div>
              </NuxtLink>
              <div class="divider" />
              <NuxtLink class="group" target="_blank" to="https://www.linkedin.com/in/arthurdanjou/">
                <div class="social-div">
                  <div class="social-item">
                    <Icon name="mdi:linkedin" size="24px" />
                    <p>LinkedIn</p>
                  </div>
                  <Icon class="social-arrow" name="material-symbols:arrow-circle-right-outline-rounded" size="24px" />
                </div>
              </NuxtLink>
              <div class="divider" />
              <NuxtLink class="group" target="_blank" to="mailto:contact@arthurdanjou.fr">
                <div class="social-div">
                  <div class="social-item">
                    <Icon name="ic:baseline-alternate-email" size="24px" />
                    <p>Mail</p>
                  </div>
                  <Icon class="social-arrow" name="material-symbols:arrow-circle-right-outline-rounded" size="24px" />
                </div>
              </NuxtLink>
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
            v-for="experience in experiences.body"
            :key="experience.id"
            :experience="experience"
          />
        </ResumeSection>
        <ResumeTitle title="Educations" />
        <ResumeSection class="space-y-4">
          <Education
            v-for="education in educations.body"
            :key="education.id"
            :education="education"
          />
        </ResumeSection>
        <ResumeTitle title="Skills" />
        <ResumeSection>
          <Stack
            v-for="skill in skills.body"
            :key="skill.id"
            :skill="skill"
          />
        </ResumeSection>
        <ResumeTitle title="Languages" />
        <ResumeSection>
          <strong class="text-black dark:text-white">French</strong> (Native Speaker), <strong class="text-black dark:text-white">English</strong> (Fluent)
        </ResumeSection>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.social-div {
  @apply py-2 flex justify-between;

  .social-arrow {
    @apply transform -rotate-45 duration-300 group-hover:(rotate-0 scale-110);
  }

  .social-item {
    p {
      @apply font-bold text-gray-600 duration-300 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white;
    }

    @apply flex items-center space-x-2;
  }
}

.divider {
  @apply border-b border-gray-300 dark:border-gray-600;
}

.title {
  @apply text-3xl font-bold my-4;
}

.subtitle {
  @apply text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify;
}
</style>
