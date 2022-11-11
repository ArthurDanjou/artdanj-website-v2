import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async () => {
  const client = usePrisma()
  return await client.post.aggregate({
    _sum: {
      views: true,
    },
  })
})
