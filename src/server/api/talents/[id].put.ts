import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'
import type { Talent } from '~/types/types'

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const body = await readBody<{ talent: Talent }>(event)
  return await prisma.talent.update({
    where: {
      id: Number(event.context.params.id),
    },
    data: {
      name: body.talent.name,
      logo: body.talent.logo,
      website: body.talent.website,
      favorite: body.talent.favorite,
      work: body.talent.work,
    },
  })
})
