import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  return await client.post.upsert({
    where: {
      slug: event.context.params.slug,
    },
    update: {},
    create: {
      slug: event.context.params.slug,
      author: {
        connect: {
          email: 'arthurdanjou@outlook.fr', // todo automate
        },
      },
    },
  })
})
