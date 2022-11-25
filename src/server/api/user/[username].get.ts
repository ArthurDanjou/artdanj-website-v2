import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const user = await prisma.user.findFirst({
    where: {
      username: String(event.context.params.username),
    },
    include: {
      comments: {
        include: {
          author: true,
          question: true,
          post: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
      questions: {
        include: {
          author: true,
          comments: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
      guestbook: {
        include: {
          author: true,
        },
      },
    },
  })
  return user || {}
})
