import {useAsyncData} from "#app";
import {queryContent} from "@nuxt/content/dist/runtime/composables/query";
import {Education, JsonParsedContent, Post, Project, SkillList, WorkExperience} from "~/types/content";

export const useProjects = () => {
  return useAsyncData('content:projects', () =>
    queryContent<JsonParsedContent<Project>>('projects').findOne(),
  )
}

export const useEducations = () => {
  return useAsyncData('content:educations', () =>
    queryContent<JsonParsedContent<Education>>('educations').find(),
  )
}

export const useWorkExperiences = () => {
  return useAsyncData('content:experiences', () =>
    queryContent<JsonParsedContent<WorkExperience>>('experiences').find(),
  )
}

export const useSkills = () => {
  return useAsyncData('content:skills', () =>
    queryContent<JsonParsedContent<SkillList>>('skills').find(),
  )
}

export const usePosts = () => {
  return useAsyncData('content:post', () =>
    queryContent<Post>()
      .sort({
        publishedAt: -1,
      })
      .find()
  )
}
