import { useSearch } from 'hooks/useSearch'
import React from 'react'
import * as S from './styles'

export default function Search() {
  const { handleSearch, searchText, setSearchText } = useSearch()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }

  return (
    <S.Form onSubmit={handleSearch()}>
      <S.Input
        placeholder="Ex: Avengers"
        onChange={handleChange}
        value={searchText}
      />
    </S.Form>
  )
}
