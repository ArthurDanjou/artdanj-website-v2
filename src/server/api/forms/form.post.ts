import { defineEventHandler, readBody } from 'h3'
import { usePrisma } from '~/composables/usePrisma'

interface Form {
  name: string
  email: string
  content: string
}

export default defineEventHandler(async (event) => {
  const client = usePrisma()
  const body = await readBody<Form>(event)
  const form = await client.form.create({
    data: {
      name: body.name,
      email: body.email,
      content: body.content,
    },
  })
  return {
    code: form !== null ? 200 : 500,
  }
})
