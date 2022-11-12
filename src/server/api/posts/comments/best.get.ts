import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async () => {
  const client = usePrisma()
  return await client.post.findMany({
    orderBy: {
      comments: {
        _count: 'desc',
      },
    },
    include: {
      author: true,
      comments: true,
    },
    take: 1,
  })
})
