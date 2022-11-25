import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Body {
  slug: string
  username: string
}

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const body = await readBody<Body>(event)
  return await prisma.savedPost.create({
    data: {
      user: {
        connect: {
          username: body.username,
        },
      },
      post: {
        connect: {
          slug: body.slug,
        },
      },
    },
  })
})
