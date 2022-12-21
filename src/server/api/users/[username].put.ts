import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Body {
  email?: string
  username?: string
  location?: string
  description?: string
  website?: string
}

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const body = await readBody<Body>(event)
  const user = await prisma.user.update({
    where: {
      email: String(event.context.params.username),
    },
    data: {
      email: body.email,
      username: body.username,
      location: body.location,
      description: body.description,
      website: body.website,
    },
  })
  return user || {}
})
