import { useRouter } from 'next/router'
import React, { createContext, useCallback, useMemo, useState } from 'react'
import { MultiResult } from 'types/themoviedb-response'

export type Filters = 'person' | 'tv' | 'movie' | 'all'

export type SearchContextValue = {
  filter: string
  searchText: string
  results: MultiResult[]
  mediaTypesCount: {
    all: number
    movie: number
    tv: number
    person: number
  }
  history: string[]
  setResults: React.Dispatch<React.SetStateAction<MultiResult[]>>
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  handleFilter: (filter?: string) => void
  search: (text: string) => void
}

export const SearchContext = createContext({} as SearchContextValue)

export const SearchProvider: React.FC = (props) => {
  const router = useRouter()
  const [filter, setFilter] = useState<Filters>('all')
  const [results, setResults] = useState<MultiResult[]>(null)
  const [searchText, setSearchText] = useState(
    (router.query?.query as string) || ''
  )
  const [history, setHistory] = useState<string[]>([])

  const mediaTypesCount = useMemo(() => {
    return {
      all: results?.length || 0,
      movie:
        results?.filter((result) => result.media_type === 'movie').length || 0,
      tv: results?.filter((result) => result.media_type === 'tv').length || 0,
      person:
        results?.filter((result) => result.media_type === 'person').length || 0
    }
  }, [results])

  const resultsToDisplay = useMemo(() => {
    switch (filter) {
      default:
      case 'all':
        return results
      case 'movie':
        return results?.filter((result) => result.media_type === 'movie')
      case 'tv':
        return results?.filter((result) => result.media_type === 'tv')
      case 'person':
        return results?.filter((result) => result.media_type === 'person')
    }
  }, [filter, results])

  const handleFilter = useCallback((filter?: Filters) => {
    setFilter(filter)
  }, [])

  const search = useCallback((text: string) => {
    router.push({
      pathname: '/',
      query: {
        query: text
      }
    })

    setHistory((history) => [...history, text])
  }, [])

  return (
    <SearchContext.Provider
      value={{
        filter,
        searchText,
        results: resultsToDisplay,
        mediaTypesCount,
        history,
        setSearchText,
        handleFilter,
        search,
        setResults
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
