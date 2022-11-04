import { defineEventHandler, getQuery } from 'h3'
import { usePrisma } from '#imports'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const query = await getQuery(event)
  return await client.guestBook.findFirst({
    where: {
      email: String(query.email),
    },
  })
})
