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

export interface FormData {
  name: string
  email: string
  content: string
}

export interface Announcement {
  id: number
  content: string
  createdAt: Date
  updatedAt: Date
}
