export const formatDate = (date: string) => {
  const split = date.split(' ')

  return date === 'Today' ? 'Today' : `${split[0]} ${split[1]}`
}
