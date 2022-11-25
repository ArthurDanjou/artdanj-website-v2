import { defineEventHandler, getQuery } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const query = await getQuery(event)
  return await client.post.upsert({
    where: {
      slug: event.context.params.slug,
    },
    update: {},
    create: {
      slug: event.context.params.slug,
      author: {
        connect: {
          email: String(query.author), // todo automate
        },
      },
    },
    include: {
      author: true,
      comments: {
        include: {
          author: true,
        },
      },
    },
  })
})
