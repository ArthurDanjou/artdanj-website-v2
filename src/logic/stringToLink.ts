export const convertStringToLink = (text: string) => {
  return text.replace(
    /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/g,
    (url) => {
      const href = url.indexOf('https') === 0 ? url : `https://${url}`
      return `<a href="${href}" target="_blank" class="content-link">${url}</a>`
    })
}
