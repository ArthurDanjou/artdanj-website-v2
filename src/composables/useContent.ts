import type { Education as EducationType, JsonParsedContent, Post, Project, SkillList, WorkExperience } from '~/types/content'
import { queryContent, useAsyncData } from '#imports'
import { groupBy } from '~/logic/groupBy'

export const useProjects = () => {
  return useAsyncData('content:projects', () =>
    queryContent<JsonParsedContent<Project>>('projects').findOne(),
  )
}

export const useEducations = (mergeLocaleMessage) => {
  return useAsyncData('content:educations', async () => {
    const educations = await queryContent<JsonParsedContent<EducationType[]>>('resume/educations').findOne()
    educations.body.forEach((education) => {
      mergeLocaleMessage('fr', {
        [education.title.code]: education.title.french,
        [education.description.code]: education.description.french,
      })
      mergeLocaleMessage('en', {
        [education.title.code]: education.title.english,
        [education.description.code]: education.description.english,
      })
    })
    return educations
  })
}

export const useWorkExperiences = (mergeLocaleMessage) => {
  return useAsyncData('content:experiences', async () => {
    const experiences = await queryContent<JsonParsedContent<WorkExperience[]>>('resume/experiences').findOne()
    experiences.body.forEach((experience) => {
      mergeLocaleMessage('fr', {
        [experience.title.code]: experience.title.french,
        [experience.description.code]: experience.description.french,
      })
      mergeLocaleMessage('en', {
        [experience.title.code]: experience.title.english,
        [experience.description.code]: experience.description.english,
      })
    })
    return experiences
  })
}

export const useSkills = (mergeLocaleMessage) => {
  return useAsyncData('content:skills', async () => {
    const skills = await queryContent<JsonParsedContent<SkillList[]>>('resume/skills').findOne()
    skills.body.forEach((skill) => {
      mergeLocaleMessage('fr', {
        [skill.name.code]: skill.name.french,
      })
      mergeLocaleMessage('en', {
        [skill.name.code]: skill.name.english,
      })
    })
    return skills
  })
}

export const usePosts = () => {
  return useAsyncData('content:posts', () =>
    queryContent<Post[]>('posts')
      .only(['title', 'slug', 'description', 'publishedAt', 'cover', 'readingMins'])
      .sort({
        publishedAt: -1,
      })
      .find(), {
    transform: posts => groupBy(posts, post => new Date(String(post.publishedAt)).getFullYear()),
  })
}

export const useLatestPost = () => {
  return useAsyncData('content:latestPost', () =>
    queryContent<Post>('posts')
      .sort({
        publishedAt: -1,
      })
      .limit(1)
      .findOne(),
  )
}
