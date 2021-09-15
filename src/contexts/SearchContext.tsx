import { useRouter } from 'next/router'
import React, { createContext, useCallback, useState } from 'react'
import { MultiResult } from 'types/themoviedb-response'

export type SearchContextValue = {
  filter: string
  searchText: string
  results: MultiResult[]
  setResults: React.Dispatch<React.SetStateAction<MultiResult[]>>
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  handleFilter: (filter?: string) => void
  handleSearch: (event: React.FormEvent) => void
}

export const SearchContext = createContext({} as SearchContextValue)

export const SearchProvider: React.FC = (props) => {
  const router = useRouter()
  const [filter, setFilter] = useState('multi')
  const [results, setResults] = useState<MultiResult[]>(null)
  const [searchText, setSearchText] = useState(
    (router.query?.query as string) || ''
  )

  const handleFilter = useCallback(
    (filter?: string) => {
      setFilter(filter)
      router.push({
        pathname: '/',
        query: {
          query: searchText
        }
      })
    },
    [searchText]
  )

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      if (!searchText.trim()) return

      router.push({
        pathname: '/',
        query: {
          query: searchText
        }
      })
    },
    [searchText]
  )

  return (
    <SearchContext.Provider
      value={{
        filter,
        searchText,
        results,
        setSearchText,
        handleFilter,
        handleSearch,
        setResults
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
