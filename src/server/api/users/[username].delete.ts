import { defineEventHandler } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const user = await prisma.user.delete({
    where: {
      username: String(event.context.params.username),
    },
  })
  return user || {}
})
