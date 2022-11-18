import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async () => {
  const prisma = usePrisma()
  const talents = await prisma.talent.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return talents || []
})
