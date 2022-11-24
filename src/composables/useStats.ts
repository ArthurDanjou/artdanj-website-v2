import type { PostDB } from '~/types/types'

export const useStats = async () => {
  const getTotalLikes = () => {
    return $fetch<PostDB>('/api/posts/likes/total')
  }

  const getTotalViews = () => {
    return $fetch<PostDB>('/api/posts/views/total')
  }

  return {
    getTotalLikes,
    getTotalViews,
  }
}
