import { useDateFormat } from '#imports'

export const formatDate = (date: string) => {
  const split = date.split(' ')
  return date === 'Today' ? 'Today' : `${split[0]} ${split[1]}`
}

export const formatBlogDate = (date: string) => {
  return useDateFormat(date, 'D MMM YYYY').value
}

export const formatGuestBookDate = (date: Date) => {
  return useDateFormat(date, 'DD MMMM YYYY {o} hh:mm').value.replace('{o}', 'at')
}
