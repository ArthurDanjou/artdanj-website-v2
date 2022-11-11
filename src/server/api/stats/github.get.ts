import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const userResponse = await fetch('https://api.github.com/users/arthurdanjou')
  const user = await userResponse.json()

  return {
    followers: user.followers,
  }
})
