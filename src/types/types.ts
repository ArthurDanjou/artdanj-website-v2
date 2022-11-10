export interface SpotifyData {
  is_playing: boolean
  device_name: string
  device_type: string
  name: string
  type: string
  author: string
  id: string
  image: {
    height: number
    width: number
    url: string
  }
  duration: number
  started_at: number
}

export interface MetaDataSupabase {
  provider: string
  slug: string
  username: string
  description: string
  avatar: string
}

export interface FormData {
  name: string
  email: string
  content: string
}

export interface Announcement {
  id: number
  content: string
  createdAt: Date
}

export interface GuestBookMessage {
  id: string
  email: string
  username: string
  content: string
  createdAt: Date
}

export interface PostDB {
  id: number
  slug: string
  views: number
  likes: number
  author: User
  createdAt: Date
  comments: Comment[]
}

export interface Maintenance {
  id: number
  reason: string
  beginAt: string
  endAt: string
  createdAt: Date
}

export enum Role {
  USER,
  ADMIN,
  BLOCKED,
}

export interface Question {
  id: number
  createdAt: Date
  author: User
  title: string
  description?: string
  comments: Comment[]
}

export interface Comment {
  id: number
  createdAt: Date
  content: string
  author: User
  question?: Question
  post?: PostDB
}

export interface User {
  id: number
  createdAt: Date
  role: Role
  username: string
  twitterId?: string
  githubId?: string
  googleId?: string
  twitchId?: string
  discordId?: string
  supabaseId: string
  email: string
  avatar: string
  description: string
  location: string
  comments: Comment
  questions: Question[]
  posts: PostDB[]
  guestbook: GuestBookMessage
}
