import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Body {
  questionId: number
  content: string
  email: string
}

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const body = await readBody<Body>(event)
  return await prisma.comment.create({
    data: {
      author: {
        connect: {
          email: body.email,
        },
      },
      content: body.content,
      question: {
        connect: {
          id: body.questionId,
        },
      },
    },
  })
})
