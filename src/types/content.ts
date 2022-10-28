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

export interface Project {
  name: string
  description: string
  latest?: string
  link: string
  icon: string
  skills: Skill[]
  tags: string[]
}

export interface WorkExperience {
  title: string
  description: string
  company: string
  location: string
  companyLink: string
  startDate: string
  endDate: string | 'Today'
}

export interface Education {
  title: string
  description: string
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
  name: string
  skills: Skill[]
}
