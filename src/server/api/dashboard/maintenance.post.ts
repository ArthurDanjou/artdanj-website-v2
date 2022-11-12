import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Maintenance {
  reason: string
  beginAt: Date
  endAt: Date
}

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const body = await readBody<Maintenance>(event)
  return await prisma.maintenance.create({
    data: {
      reason: body.reason,
      beginAt: body.beginAt,
      endAt: body.endAt,
    },
  })
})
