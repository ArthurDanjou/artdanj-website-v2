import { defineEventHandler } from 'h3'
import { usePrisma } from '#imports'

export default defineEventHandler(async () => {
  const client = usePrisma()
  return await client.announcement.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })
})
