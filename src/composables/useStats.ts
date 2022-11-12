import type { PostDB } from '~/types/types'

export const useStats = async () => {
  const getMostLiked = () => {
    return $fetch<PostDB>('/api/posts/likes/best')
  }

  const getTotalLikes = () => {
    return $fetch<PostDB>('/api/posts/likes/total')
  }

  const getMostViewed = () => {
    return $fetch<PostDB>('/api/posts/views/best')
  }

  const getTotalViews = () => {
    return $fetch<PostDB>('/api/posts/views/total')
  }

  const getMostCommented = () => {
    return $fetch<PostDB>('/api/posts/comments/best')
  }

  const getTotalComments = () => {
    return $fetch<PostDB>('/api/posts/comments/total')
  }

  return {
    getMostLiked,
    getTotalLikes,
    getMostViewed,
    getTotalViews,
    getMostCommented,
    getTotalComments,
  }
}
