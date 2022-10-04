import { defineEventHandler } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async () => {
  const client = new PrismaClient()
  const guestbooks = await client.guestBook.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
  })
  await client.$disconnect()
  return guestbooks
})
