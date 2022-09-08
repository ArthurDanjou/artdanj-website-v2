import {MarkdownParsedContent, ParsedContent} from "@nuxt/content/dist/runtime/types";

export interface Post extends MarkdownParsedContent {
  slug: string,
  title: string,
  description: string,
  readingMins: number,
  publishedAt: Date,
  modifiedAt: Date,
}

export interface Project extends ParsedContent {
  name: string,
  description: string,
  link: string,
  image: string,
}

export interface WorkExperience extends ParsedContent {
  title: string,
  description: string,
  company: string,
  location: string,
  companyLink?: string,
  startDate: Date,
  endDate: Date | 'Today',
  cover: string,
}

export interface Education extends ParsedContent {
  title: string,
  description: string,
  location: string,
  startDate: Date,
  endDate: Date | 'Today',
}

export interface JsonParsedContent<T> extends ParsedContent {
  body: T
}

interface Skill {
  name: string
}

export interface SkillList extends ParsedContent {
  name: string,
  skills: Skill[]
}
