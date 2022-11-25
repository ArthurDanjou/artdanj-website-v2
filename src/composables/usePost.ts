import type { RouteParamValue } from 'vue-router'
import { computed, ref, useAsyncData } from '#imports'
import type { PostDB } from '~/types/types'

export const usePost = async (slug: string | RouteParamValue[], author: string, title: string) => {
  const { data: post, refresh: refreshPost } = await useAsyncData<PostDB>(`blog:post-db:${slug}`, async () => {
    return await $fetch<PostDB>(`/api/posts/${slug}`, {
      method: 'PUT',
      body: {
        title,
        email: author,
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
    refreshPost,
    likes: computed(() => likes.value),
    views: computed(() => views.value),
  }
}
