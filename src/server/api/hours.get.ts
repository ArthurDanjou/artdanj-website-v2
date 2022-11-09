import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const hoursResponse = await fetch('https://api.arthurdanjou.fr/stats')
  const hours = await hoursResponse.json()

  return {
    hours: await hours.total.development_time.hours,
  }
})
