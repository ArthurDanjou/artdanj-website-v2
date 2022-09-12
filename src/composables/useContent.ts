import type { Education, JsonParsedContent, Post, Project, SkillList, WorkExperience } from '~/types/content'
import { queryContent, useAsyncData } from '#imports'

export const useProjects = () => {
  return useAsyncData('content:projects', () =>
    queryContent<JsonParsedContent<Project>>('projects').findOne(),
  )
}

export const useEducations = () => {
  return useAsyncData('content:educations', () =>
    queryContent<JsonParsedContent<Education>>('resume/educations').findOne(),
  )
}

export const useWorkExperiences = () => {
  return useAsyncData('content:experiences', () =>
    queryContent<JsonParsedContent<WorkExperience>>('resume/experiences').findOne(),
  )
}

export const useSkills = () => {
  return useAsyncData('content:skills', () =>
    queryContent<JsonParsedContent<SkillList>>('resume/skills').findOne(),
  )
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
