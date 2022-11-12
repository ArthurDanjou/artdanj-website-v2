import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Post {
  slug: string
}

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const body = await readBody<Post>(event)
  return await client.post.update({
    where: {
      slug: body.slug,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  })
})
