import { DependencyList, useEffect } from 'react'

type EventKey = string

export function useKeydown(
  callbacks: Record<EventKey, (event: KeyboardEvent) => any>,
  deps: DependencyList = []
) {
  useEffect(() => {
    function cb(event: KeyboardEvent) {
      callbacks[event.key]?.(event)
    }

    window.addEventListener('keydown', cb)
    return () => window.removeEventListener('keydown', cb)
  }, deps)
}
