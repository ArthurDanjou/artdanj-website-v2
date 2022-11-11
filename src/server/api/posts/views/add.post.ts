import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const body = await readBody(event)
  return await client.post.update({
    where: {
      slug: body.slug,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  })
})
