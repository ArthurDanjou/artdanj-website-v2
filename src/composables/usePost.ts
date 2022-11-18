import type { RouteParamValue } from 'vue-router'
import { computed, ref, useAsyncData } from '#imports'
import type { PostDB } from '~/types/types'

export const usePost = async (slug: string | RouteParamValue[], author: string) => {
  const { data: post } = await useAsyncData<PostDB>(`blog:post-db:${slug}`, async () => {
    return await $fetch<PostDB>(`/api/posts/${slug}`, {
      query: {
        author,
      },
    })
  })

  const likes = ref(post.value!.likes)
  const like = async () => {
    const data = await $fetch<PostDB>('/api/posts/likes/add', {
      method: 'POST',
      body: {
        slug,
      },
    })
    likes.value = data.likes
  }

  const views = ref(post.value!.views)
  const view = async () => {
    const data = await $fetch<PostDB>('/api/posts/views/add', {
      method: 'POST',
      body: {
        slug,
      },
    })
    views.value = data.views
  }

  return {
    post,
    like,
    view,
    likes: computed(() => likes.value),
    views: computed(() => views.value),
  }
}
