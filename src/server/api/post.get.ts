import { defineEventHandler, getQuery } from 'h3'
import { usePrisma } from '#imports'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const query = await getQuery(event)
  return await client.post.upsert({
    where: {
      slug: String(query.slug),
    },
    update: {},
    create: {
      slug: String(query.slug),
    },
  })
})
