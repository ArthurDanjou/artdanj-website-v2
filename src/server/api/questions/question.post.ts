import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Body {
  title: string
  description: string
  email: string
}

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const body = await readBody<Body>(event)
  return await prisma.question.create({
    data: {
      title: body.title,
      description: body.description,
      author: {
        connect: {
          email: body.email,
        },
      },
    },
  })
})
