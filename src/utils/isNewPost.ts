const DAY_IN_MS = 24 * 60 * 60 * 1000

export function isNewPost(date: string): boolean {
  const age = Date.now() - new Date(date).getTime()
  return age >= 0 && age < DAY_IN_MS
}
