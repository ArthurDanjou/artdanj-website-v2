import { defineEventHandler } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async () => {
  const client = new PrismaClient()
  const maintenance = await client.maintenance.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })
  await client.$disconnect()
  return maintenance
})
