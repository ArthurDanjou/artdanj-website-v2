import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Body {
  email: string
  title: string
}

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const body = await readBody<Body>(event)
  return await client.post.upsert({
    where: {
      slug: event.context.params.slug,
    },
    update: {},
    create: {
      slug: event.context.params.slug,
      title: body.title,
      author: {
        connect: {
          email: body.email, // todo automate
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
