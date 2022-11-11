import type { PostDB } from '~/types/types'

export const useDashboard = async () => {
  const mostLiked = () => {
    return $fetch<PostDB>('/api/posts/likes/best')
  }

  const mostViewed = () => {
    return $fetch<PostDB>('/api/posts/views/best')
  }

  return {
    mostLiked,
    mostViewed,
  }
}
