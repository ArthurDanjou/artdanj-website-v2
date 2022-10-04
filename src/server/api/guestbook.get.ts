import { defineEventHandler, getQuery } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const client = new PrismaClient()
  const query = await getQuery(event)
  const guestbook = await client.guestBook.findFirst({
    where: {
      email: String(query.email),
    },
  })
  await client.$disconnect()
  return guestbook
})
