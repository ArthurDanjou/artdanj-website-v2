import { defineEventHandler } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async () => {
  const client = new PrismaClient()
  return await client.announcement.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })
})
