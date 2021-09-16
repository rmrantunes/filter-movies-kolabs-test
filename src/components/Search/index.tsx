import { useSearch } from 'hooks/useSearch'
import React from 'react'
import * as S from './styles'

export default function Search() {
  const { search, searchText, setSearchText } = useSearch()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    search(searchText)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        placeholder="Ex: Avengers"
        onChange={handleChange}
        value={searchText}
      />
    </S.Form>
  )
}
