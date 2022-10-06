import { defineEventHandler, readBody } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const client = new PrismaClient()
  const body = await readBody(event)
  const post = await client.post.update({
    where: {
      slug: body.slug,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  })
  await client.$disconnect()
  return post
})
