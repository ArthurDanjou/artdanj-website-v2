import type { RouteParamValue } from 'vue-router'
import { computed, ref, useAsyncData } from '#imports'
import type { PostDB } from '~/types/types'

export const usePost = async (slug: string | RouteParamValue[]) => {
  const post = ref<PostDB | null>()
  const { data: postDb } = await useAsyncData(`blog:post-db:${slug}`, () => {
    return $fetch<PostDB>('/api/post', {
      method: 'GET',
      query: {
        slug,
      },
    })
  })
  post.value = postDb.value

  const likes = ref(post.value!.likes)
  const like = async () => {
    const data = await $fetch<PostDB>('/api/likes', {
      method: 'POST',
      body: {
        slug,
      },
    })
    likes.value = data.likes
  }

  const views = ref(post.value!.views)
  const view = async () => {
    const data = await $fetch<PostDB>('/api/views', {
      method: 'POST',
      body: {
        slug,
      },
    })
    views.value = data.views
  }

  return {
    like,
    view,
    likes: computed(() => likes.value),
    views: computed(() => views.value),
  }
}
