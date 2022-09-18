import { defineEventHandler, readBody } from 'h3'
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const client = new PrismaClient()
  const body = await readBody(event)
  const form = await client.form.create({
    data: {
      name: body.name,
      email: body.email,
      content: body.content,
    },
  })
  await client.$disconnect()
  return {
    code: form !== null ? 200 : 500,
  }
})
