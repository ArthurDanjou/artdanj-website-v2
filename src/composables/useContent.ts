import type { Education, Post, Project, SkillList, WorkExperience } from '~/types/content'
import { queryContent, useAsyncData } from '#imports'

export const useProjects = () => {
  return useAsyncData('content:projects', () => {
    return queryContent<Project[]>('projects').find()
  })
}

export const useLatestProject = () => {
  return useAsyncData('content:latestProject', () => {
    return queryContent<Project>('projects')
      .where({
        latest: true,
      })
      .limit(1)
      .find()
  })
}

export const useEducations = () => {
  return useAsyncData('content:educations', () => {
    return queryContent<Education[]>('educations')
      .sort({
        endDate: -1,
      })
      .find()
  })
}

export const useWorkExperiences = () => {
  return useAsyncData('content:experiences', () => {
    return queryContent<WorkExperience[]>('experiences')
      .sort({
        endDate: -1,
      })
      .find()
  })
}

export const useSkills = () => {
  return useAsyncData('content:skills', () => {
    return queryContent<SkillList[]>('skills').find()
  })
}

export const usePosts = () => {
  return useAsyncData('content:posts', () => {
    return queryContent<Post[]>('posts')
      .sort({
        publishedAt: -1,
      })
      .find()
  })
}

export const useLatestPost = () => {
  return useAsyncData('content:latestPost', () => {
    return queryContent<Post>('posts')
      .sort({
        publishedAt: -1,
      })
      .limit(1)
      .find()
  })
}
