import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  return await client.guestBook.findFirst({
    where: {
      author: {
        email: event.context.params.email,
      },
    },
  })
})
