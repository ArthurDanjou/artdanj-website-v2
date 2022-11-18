import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async () => {
  const client = usePrisma()
  const maintenance = await client.maintenance.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return maintenance || {}
})
