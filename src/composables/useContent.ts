import type { JsonParsedContent, Post, Project } from '~/types/content'
import { queryContent, useAsyncData } from '#imports'
import {Education as EducationType, SkillList, WorkExperience as WorkExperienceType} from "~/types/content";

export const useProjects = () => {
  return useAsyncData('content:projects', () =>
    queryContent<JsonParsedContent<Project>>('projects').findOne(),
  )
}

export const useEducations = (mergeLocaleMessage) => {
  return useAsyncData('content:educations', async () => {
    const educations = await queryContent<JsonParsedContent<EducationType[]>>('resume/educations').findOne()
    educations.body.map((education) => {
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
    const experiences = await queryContent<JsonParsedContent<WorkExperienceType[]>>('resume/experiences').findOne()
    experiences.body.map((experience) => {
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
    skills.body.map((skill) => {
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
  return useAsyncData('content:post', () =>
    queryContent<Post>()
      .sort({
        publishedAt: -1,
      })
      .find(),
  )
}
