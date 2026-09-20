export function getPreview(content: string, wordLimit = 8): string {
  const words = content.trim().split(/\s+/)

  if (words.length <= wordLimit) {
    return content
  }

  return words.slice(0, wordLimit).join(' ') + '...'
}
