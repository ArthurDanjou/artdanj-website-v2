import { useDateFormat } from '#imports'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const formatDate = (date: string) => {
  const split = date.split(' ')
  return date === 'Today' ? 'Today' : `${split[0]} ${split[1]}`
}

export const formatBlogDate = (date: string) => {
  return useDateFormat(date, 'D MMM YYYY').value
}

export const formatGuestBookDate = (date: Date) => {
  const dateObj = new Date(date)
  return `${dateObj.getDate()} ${MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()} at ${dateObj.getHours()}:${dateObj.getMinutes()}`
}
