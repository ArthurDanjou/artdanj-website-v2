import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async () => {
  const prisma = usePrisma()
  const questions = await prisma.question.findMany({
    include: {
      author: true,
    },
  })
  return questions || []
})
