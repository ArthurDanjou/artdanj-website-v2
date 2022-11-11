import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async () => {
  const client = usePrisma()
  return await client.post.findMany({
    orderBy: {
      views: 'desc',
    },
    include: {
      author: true,
    },
    take: 1,
  })
})
