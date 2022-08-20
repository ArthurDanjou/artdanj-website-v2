export const THEMES = [
  'sky',
  'lime',
  'yellow',
  'orange',
  'red',
  'violet',
]

export const getThemeTextColor = (theme: String) => {
  const duration = 'duration-300'
  switch (theme) {
    case 'sky':
      return `${duration} text-sky-400`
    case 'lime':
      return `${duration} text-lime-400`
    case 'violet':
      return `${duration} text-violet-400`
    case 'yellow':
      return `${duration} text-yellow-400`
    case 'orange':
      return `${duration} text-orange-400`
    case 'red':
      return `${duration} text-red-500`
  }
}

export const getThemeBackgroundColor = (theme: String) => {
  const duration = 'duration-300'
  switch (theme) {
    case 'sky':
      return `${duration} bg-sky-400`
    case 'lime':
      return `${duration} bg-lime-400`
    case 'violet':
      return `${duration} bg-violet-400`
    case 'yellow':
      return `${duration} bg-yellow-400`
    case 'orange':
      return `${duration} bg-orange-400`
    case 'red':
      return `${duration} bg-red-500`
  }
}
