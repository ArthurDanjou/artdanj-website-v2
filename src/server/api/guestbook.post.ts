import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '#imports'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const body = await readBody(event)
  return await client.guestBook.upsert({
    where: {
      email: body.email,
    },
    create: {
      content: body.content,
      username: body.username,
      email: body.email,
    },
    update: {
      content: body.content,
      username: body.username,
    },
  })
})
