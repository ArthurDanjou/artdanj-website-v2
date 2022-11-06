import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async () => {
  const client = usePrisma()
  return await client.maintenance.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })
})
