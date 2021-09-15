import { useRouter } from 'next/router'
import React, { createContext, useCallback, useState } from 'react'

export type SearchContextValue = {
  filter: string
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  handleFilter: (filter?: string) => void
  handleSearch: (event: React.FormEvent) => void
}

export const SearchContext = createContext({} as SearchContextValue)

export const SearchProvider: React.FC = (props) => {
  const router = useRouter()
  const [filter, setFilter] = useState(
    (router.query?.filter as string) || 'multi'
  )
  const [searchText, setSearchText] = useState(
    (router.query?.query as string) || 'teste'
  )

  const handleFilter = useCallback(
    (filter?: string) => {
      setFilter(filter)
      router.push({
        pathname: '/',
        query: {
          query: searchText,
          filter
        }
      })
    },
    [searchText, filter]
  )

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      if (!searchText.trim()) return

      router.push({
        pathname: '/',
        query: {
          query: searchText,
          filter
        }
      })
    },
    [filter, searchText]
  )

  return (
    <SearchContext.Provider
      value={{ filter, searchText, setSearchText, handleFilter, handleSearch }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
