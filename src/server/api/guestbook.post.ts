import { defineEventHandler, readBody } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const client = new PrismaClient()
  const body = await readBody(event)
  const guestBook = await client.guestBook.upsert({
    where: {
      email: body.email,
    },
    create: {
      content: body.content,
      username: body.username,
      email: body.email,
    },
    update: {
      content: body.content,
      username: body.username,
    },
  })
  await client.$disconnect()
  return guestBook
})
