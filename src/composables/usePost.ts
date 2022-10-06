import type { RouteParamValue } from 'vue-router'
import { computed, ref, useAsyncData } from '#imports'
import type { PostDB } from '~/types/types'

export const usePost = async (slug: string | RouteParamValue[]) => {
  const post = ref<PostDB>(null)
  const { data: postDb } = await useAsyncData(`blog:post-db:${slug}`, () => {
    return $fetch<PostDB>('/api/post', {
      method: 'GET',
      query: {
        slug,
      },
    })
  })
  post.value = postDb.value

  const likes = ref(post.value.likes)
  const like = async () => {
    const { data } = await useAsyncData(`blog:post-like:${slug}:${likes.value}`, () => {
      return $fetch('/api/likes', {
        method: 'POST',
        body: {
          slug,
        },
      })
    })
    likes.value = data.value.likes
  }

  const views = ref(post.value.views)
  const view = async () => {
    const { data } = await useAsyncData(`blog:post-view:${slug}`, () => {
      return $fetch('/api/views', {
        method: 'POST',
        body: {
          slug,
        },
      })
    })
    views.value = data.value.views
  }

  return {
    like,
    getLikes: computed(() => likes.value),
    view,
    getViews: computed(() => views.value),
  }
}
