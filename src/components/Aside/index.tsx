import FilterButton from 'components/FilterButton'
import * as S from './styles'
import { useSearch } from 'hooks/useSearch'

export default function Aside() {
  const { handleFilter, filter } = useSearch()

  return (
    <S.Aside>
      <S.AsideCard>
        <S.AsideCardHeader>
          <h2>Resultado da Busca</h2>
        </S.AsideCardHeader>
        <S.AsideNav>
          <FilterButton
            onClick={handleFilter}
            filter="all"
            isActive={filter === 'all'}
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
        </S.AsideNav>
      </S.AsideCard>
    </S.Aside>
  )
}
