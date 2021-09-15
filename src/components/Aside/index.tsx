import FilterButton from 'components/FilterButton'
import * as S from './styles'
import { useSearch } from 'hooks/useSearch'

export default function Aside() {
  const { handleFilter, filter } = useSearch()

  return (
    <S.Aside>
      <S.Filters>
        <S.Header>
          <h2>Resultado da Busca</h2>
        </S.Header>
        <S.Nav>
          <FilterButton
            onClick={() => ({})}
            filter="multi"
            isActive={filter === 'multi'}
          >
            Tudo
          </FilterButton>
          <FilterButton
            onClick={handleFilter}
            filter="movie"
            isActive={filter === 'movie'}
          >
            Filmes
          </FilterButton>
          <FilterButton
            onClick={handleFilter}
            filter="tv"
            isActive={filter === 'tv'}
          >
            Séries
          </FilterButton>
          <FilterButton
            onClick={handleFilter}
            filter="person"
            isActive={filter === 'person'}
          >
            Pessoas
          </FilterButton>
        </S.Nav>
      </S.Filters>
    </S.Aside>
  )
}
