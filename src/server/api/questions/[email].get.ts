import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  return await prisma.question.findMany({
    where: {
      author: {
        email: event.context.params.email,
      },
    },
  })
})
