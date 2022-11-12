import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Announce {
  content: string
}

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const body = await readBody<Announce>(event)
  return await prisma.announcement.create({
    data: {
      content: body.content,
    },
  })
})
