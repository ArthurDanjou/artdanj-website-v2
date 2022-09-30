import type { Education, JsonParsedContent, Post, Project, SkillList, WorkExperience } from '~/types/content'
import {useAsyncData} from "#app";
import {queryContent} from "#imports";

export const useProjects = () => {
  return useAsyncData('content:projects',  () => {
      return queryContent<JsonParsedContent<Project>>('projects').findOne()
  })
}

export const useEducations = () => {
  return useAsyncData('content:educations',  () => {
    return queryContent<JsonParsedContent<Education[]>>('resume/educations').findOne()
  })
}

export const useWorkExperiences = () => {
  return useAsyncData('content:experiences',  () => {
    return queryContent<JsonParsedContent<WorkExperience[]>>('resume/experiences').findOne()
  })
}

export const useSkills = () => {
  return useAsyncData('content:skills',  () => {
    return queryContent<JsonParsedContent<SkillList[]>>('resume/skills').findOne()
  })
}

export const usePosts = () => {
  return useAsyncData('content:posts', () => {
    return queryContent<Post[]>('posts')
    .only(['title', 'slug', 'description', 'publishedAt', 'cover', 'readingMins'])
    .sort({
      publishedAt: -1,
    })
    .find()
  })
}

export const useLatestPost = () => {
  return useAsyncData('content:latestPost', () => {
    return queryContent<Post>('posts')
    .only(['title', 'slug', 'description', 'publishedAt', 'cover', 'readingMins'])
    .sort({
      publishedAt: -1,
    })
    .limit(1)
    .find()
  })
}
