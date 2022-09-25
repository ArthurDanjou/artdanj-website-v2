import type { Education, JsonParsedContent, Post, Project, SkillList, WorkExperience } from '~/types/content'
import { queryContent, useAsyncData } from '#imports'

export const useProjects = async () => {
  return useAsyncData('content:projects', async () => {
      return await queryContent<JsonParsedContent<Project>>('projects').findOne()
  })
}

export const useEducations = () => {
  return useAsyncData('content:educations', async () => {
    return await queryContent<JsonParsedContent<Education[]>>('resume/educations').findOne()
  })
}

export const useWorkExperiences = () => {
  return useAsyncData('content:experiences', async () => {
    return await queryContent<JsonParsedContent<WorkExperience[]>>('resume/experiences').findOne()
  })
}

export const useSkills = () => {
  return useAsyncData('content:skills', async () => {
    return await queryContent<JsonParsedContent<SkillList[]>>('resume/skills').findOne()
  })
}

export const usePosts = () => {
  return useAsyncData('content:posts', async () =>
    await queryContent<Post[]>('posts')
      .only(['title', 'slug', 'description', 'publishedAt', 'cover', 'readingMins'])
      .sort({
        publishedAt: -1,
      })
      .find()
  )
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
