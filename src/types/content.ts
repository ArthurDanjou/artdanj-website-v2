import type { MarkdownParsedContent, ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends MarkdownParsedContent {
  slug: string
  title: string
  description: string
  readingMins: number
  publishedAt: string
  modifiedAt: string
  cover: string
}

interface Translation {
  code: string
  french: string
  english: string
}

export interface Project extends ParsedContent {
  name: Translation
  description: Translation
  link: string
  image: string
  date: string
}

export interface WorkExperience {
  title: Translation
  description: Translation
  company: string
  location: string
  companyLink: string
  startDate: string
  endDate: string | 'Today'
}

export interface Education {
  title: Translation
  description: Translation
  location: string
  startDate: string
  endDate: string | 'Today'
}

export interface JsonParsedContent<T> extends ParsedContent {
  body: T
}

interface Skill {
  name: string
}

export interface SkillList extends ParsedContent {
  name: Translation
  skills: Skill[]
}
