import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface GuestBook {
  name: string
  email: string
  content: string
}

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const body = await readBody<GuestBook>(event)
  return await client.guestBook.upsert({
    where: {
      userEmail: body.email,
    },
    create: {
      content: body.content,
      author: {
        connect: {
          email: body.email,
        },
      },
    },
    update: {
      content: body.content,
      createdAt: new Date(),
    },
  })
})
