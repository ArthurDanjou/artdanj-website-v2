export const formatBigNumber = (number: number) => {
  // format big number with k, M...
  if (number > 1_000_000)
    return `${(number / 1_000_000).toFixed(0)} M`
  else if (number > 1_000)
    return `${(number / 1000).toFixed(0)} k`
  else
    return number
}
