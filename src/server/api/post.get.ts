import { defineEventHandler, getQuery } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const client = new PrismaClient()
  const query = await getQuery(event)
  const post = await client.post.upsert({
    where: {
      slug: String(query.slug),
    },
    update: {},
    create: {
      slug: String(query.slug),
    },
  })
  await client.$disconnect()
  return post
})
