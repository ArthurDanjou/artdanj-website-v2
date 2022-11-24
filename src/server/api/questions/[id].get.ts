import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const questions = await prisma.question.findFirst({
    where: {
      id: Number(event.context.params.id),
    },
    include: {
      comments: {
        include: {
          author: true,
        },
      },
      author: true,
    },
  })
  return questions || []
})
