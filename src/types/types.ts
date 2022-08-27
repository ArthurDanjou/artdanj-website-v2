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
