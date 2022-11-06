import { defineEventHandler, getQuery } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const query = await getQuery(event)
  return await client.guestBook.findFirst({
    where: {
      email: String(query.email),
    },
  })
})
