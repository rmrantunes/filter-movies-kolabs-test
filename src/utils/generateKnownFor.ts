import { MultiResult } from 'types/themoviedb-response'

export function generateKnownFor(known_for: MultiResult['known_for']) {
  const listString = known_for
    .map(({ title }) => (title ? `'${title}'` : ''))
    .filter(Boolean)
    .join(', ')

  return `Conhecido por: ${listString}`
}
