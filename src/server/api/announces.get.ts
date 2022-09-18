import { defineEventHandler } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async () => {
  const client = new PrismaClient()
  const announce = await client.announcement.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })
  await client.$disconnect()
  return announce
})
