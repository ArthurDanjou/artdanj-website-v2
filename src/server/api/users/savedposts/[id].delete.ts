import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  return await prisma.savedPost.delete({
    where: {
      id: Number(event.context.params.id),
    },
  })
})
