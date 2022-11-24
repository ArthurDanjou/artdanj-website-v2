import { useDateFormat } from '#imports'

export const formatDate = (date: string) => {
  const split = date.split(' ')
  return date === 'Today' ? 'Today' : `${split[0]} ${split[1]}`
}

export const formatBlogDate = (date: string) => {
  return useDateFormat(date, 'D MMM YYYY', { locales: 'en-EN' }).value
}

export const formatGuestBookDate = (date: string) => {
  return useDateFormat(date, 'D MMMM YYYY {o} HH:mm', { locales: 'en-EN' }).value.replace('{o}', 'at')
}
