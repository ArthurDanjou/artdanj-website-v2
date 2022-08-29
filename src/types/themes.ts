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

export const getThemeHoverBackgroundColor = (theme: String) => {
  const duration = 'duration-300'
  switch (theme) {
    case 'sky':
      return `${duration} hover:bg-sky-300 dark:hover:bg-sky-500`
    case 'lime':
      return `${duration} hover:bg-lime-300 dark:hover:bg-lime-500`
    case 'violet':
      return `${duration} hover:bg-violet-300 dark:hover:bg-violet-500`
    case 'yellow':
      return `${duration} hover:bg-yellow-300 dark:hover:bg-yellow-500`
    case 'orange':
      return `${duration} hover:bg-orange-300 dark:hover:bg-orange-500`
    case 'red':
      return `${duration} hover:bg-red-400 dark:hover:bg-red-600`
  }
}
